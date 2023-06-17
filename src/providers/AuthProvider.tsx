import React, {
	useState,
	useEffect,
	useContext,
	createContext,
} from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { AlertContext } from "@/providers/AlertProvider";
import { AUTH } from "@/constants";
import { BaseProps, UserInfo } from "@/types";

interface AuthContext {
	user: UserInfo,
	setUser: (_v: UserInfo) => void,
}

const authContext = createContext<AuthContext>({
	user: {
		loggedIn: false,
		email: "",
		emailVerified: false,
		id: "",
		firstName: "",
		lastName: "",
		phone: "",
		image: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		loading: true,
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setUser: () => {},
});

const useProvideAuth = () => {
	const [user, setUser] = useState<UserInfo>({
		loggedIn: false,
		email: "",
		emailVerified: false,
		id: "",
		firstName: "",
		lastName: "",
		image: "",
		phone: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		loading: true,
	});
	const { setAlertInfo } = useContext(AlertContext);

	const fetchUserInfo = async () => {
		/**
     * Fetch user Info and display error or remove token
     */
		setAlertInfo({
			msg: "Not Impleted",
		});
	};

	useEffect(() => {
		const accessToken = localStorage.getItem(AUTH.ACCESS_TOKEN);
		if (accessToken) {
			fetchUserInfo()
				.catch(() => {
					setUser({
						...user,
						loading: false,
					});
				});
		} else {
			setUser({
				...user,
				loading: false,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		user,
		setUser,
	};
};

const AuthProvider: React.FC<BaseProps> = ({ children }) => {
	const auth = useProvideAuth();
	return (
		<authContext.Provider value={auth}>
			{
				auth.user.loading
					? (
						<Backdrop
							sx={{
								color: "#fff",
								zIndex: (theme) => theme.zIndex.drawer + 1,
								display: "flex",
								flexDirection: "column",
							}}
							open
						>
							<CircularProgress color="inherit" />
							<Typography sx={{ mt: 3 }} variant="h6" gutterBottom component="div">
                LOADING
							</Typography>
						</Backdrop>
					) : children
			}
		</authContext.Provider>
	);
};

export const useAuth = () => useContext(authContext);

export default AuthProvider;
