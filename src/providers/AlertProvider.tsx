import React, { useState } from "react";

import { Alerts, BaseAlterProps } from "@/components";
import { BaseProps } from "@/types";

interface AlertContext {
	setAlertInfo: (_val: Partial<BaseAlterProps> & Required<Pick<BaseAlterProps, "msg">>) => void;
}

export const AlertContext = React.createContext<AlertContext>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setAlertInfo: () => {},
});

const AlertProvider: React.FC<BaseProps> = ({ children }) => {
	const [alertInfo, setAlertInfo] = useState<BaseAlterProps>({
		horizontal: "right",
		msg: "",
		open: false,
		severity: "success",
		vertical: "bottom",
	});

	const onclose = () => {
		setAlertInfo({
			horizontal: "right",
			msg: "",
			open: false,
			severity: "success",
			vertical: "bottom",
		});
	};

	return (
		<AlertContext.Provider
			value={{
				setAlertInfo: (val) => {
					setAlertInfo({
						open: val?.open ?? true,
						horizontal: val?.horizontal || "right",
						vertical: val?.vertical || "bottom",
						severity: val?.severity || "info",
						msg: val.msg,
					});
				},
			}}
		>
			{alertInfo.open ? <Alerts {...alertInfo} onclose={onclose} /> : ""}
			{children}
		</AlertContext.Provider>
	);
};

export const useAlert = () => React.useContext(AlertContext);

export default AlertProvider;
