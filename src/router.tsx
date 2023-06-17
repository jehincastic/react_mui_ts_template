import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "@/config/router";
import { NotFound } from "@/screens";

const RouterApp = () => (
	<BrowserRouter>
		<Routes>
			{Object.keys(routes.Screens).map((key) => {
				const { component: { default: Component }, isPrivate, path } = routes.Screens[key];
				return (
					<Route
						key={key}
						path={path}
						element={<Component isPrivate={isPrivate} />}
					/>
				);
			})}
			{/* For unknow/non-defined path */}
			<Route path="*" element={<NotFound.default />} />
		</Routes>
	</BrowserRouter>
);

export default RouterApp;
