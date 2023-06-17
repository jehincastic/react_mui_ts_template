import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider, Theme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/config/theme";
import { THEME } from "@/constants";
import { BaseProps, ThemeType } from "@/types";

interface ThemeCtx {
	themeName: ThemeType;
	theme: Theme;
	changeTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeCtx>({
	themeName: THEME.LIGHT,
	theme: theme.light,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	changeTheme: () => {},
});

const ThemeProvider: React.FC<BaseProps> = ({ children }) => {
	const [themeName, setTheme] = useState<ThemeType>(THEME.LIGHT);

	useEffect(() => {
		// set theme based on local storage
		const localTheme = localStorage.getItem(THEME.KEY);
		if (localTheme) {
			setTheme(localTheme as ThemeType);
		}
	}, []);

	const changeTheme = () => {
		const newTheme = themeName === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		setTheme(newTheme);
		localStorage.setItem(THEME.KEY, newTheme);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme: theme[themeName],
				themeName,
				changeTheme,
			}}
		>
			<StyledEngineProvider injectFirst>
				<MuiThemeProvider theme={theme[themeName]}>
					<CssBaseline />
					{children}
				</MuiThemeProvider>
			</StyledEngineProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
