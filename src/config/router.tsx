import React from "react";
import { Home } from "@/screens";

interface RouterInterface {
	Screens: {
		[key: string]: {
			path: string;
			component: {
				default: React.FC<{ isPrivate: boolean }>,
			};
			isPrivate: boolean;
		},
	},
	Api: {
		[key: string]: {
			path: string;
		}
	}
}

const router: RouterInterface = {
	Screens: {
		Home: {
			path: "/",
			component: Home,
			isPrivate: false,
		},
	},
	Api: {
		Me: {
			path: "/",
		},
	},
};

export default router;
