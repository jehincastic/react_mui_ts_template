import { THEME } from "@/constants";

export interface UserInfo {
	loggedIn: boolean;
	email: string;
	emailVerified: boolean;
	id: string;
	firstName: string;
	lastName: string;
	phone: string;
	image: string;
	createdAt: Date;
	updatedAt: Date;
	loading: boolean;
}

export type ThemeType = typeof THEME.LIGHT | typeof THEME.DARK;
