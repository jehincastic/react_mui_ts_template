import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import AlertProvider from "@/providers/AlertProvider";
import AuthProvider from "@/providers/AuthProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import RouterApp from "@/router";

const App = () => (
	<LocalizationProvider dateAdapter={AdapterDateFns}>
		<ThemeProvider>
			<AlertProvider>
				<AuthProvider>
					<RouterApp />
				</AuthProvider>
			</AlertProvider>
		</ThemeProvider>
	</LocalizationProvider>
);

export default App;
