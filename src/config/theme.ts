import { createTheme, Theme } from "@mui/material/styles";
import { ThemeType } from "@/types";

const lightTheme = createTheme();

const darkTheme = createTheme({
	palette: {
		common: {
			black: "#000",
			white: "#fff",
		},
		background: {
			paper: "#100e1d",
			default: "#fafafa",
		},
		primary: {
			light: "#2058f1",
			main: "#2a2e52",
			dark: "#1e213a",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ffffff",
			main: "rgb(54, 58, 101)",
			dark: "#0b0d1afa",
			contrastText: "#fff",
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#fff",
		},
		text: {
			primary: "rgba(255, 255, 255, 0.8)",
			secondary: "rgba(108, 110, 131, 0.3)",
			disabled: "rgba(0, 0, 0, 0.38)",
		},
	},
});

const theme: { [key in ThemeType]: Theme } = {
	light: lightTheme,
	dark: darkTheme,
};

export default theme;
