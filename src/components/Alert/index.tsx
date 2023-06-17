import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

export interface BaseAlterProps {
	severity?: AlertColor;
	open?: boolean;
	horizontal: "center" | "left" | "right";
	vertical: "bottom" | "top";
	msg: string;
}

interface AlterProps extends BaseAlterProps {
	onclose: () => void;
}

export const Alerts: React.FC<AlterProps> = ({
	severity,
	open: isOpen,
	onclose,
	horizontal,
	vertical,
	msg,
}) => {
	const [open, setOpen] = React.useState(isOpen);

	const handleClose = () => {
		onclose();
		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{
				vertical,
				horizontal,
			}}
		>
			<MuiAlert variant="filled" onClose={handleClose} severity={severity}>
				{msg}
			</MuiAlert>
		</Snackbar>
	);
};
