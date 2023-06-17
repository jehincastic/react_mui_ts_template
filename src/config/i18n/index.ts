import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/config/i18n/en.json";

const resources = {
	en,
};

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",
		interpolation: {
			escapeValue: false,
		},
		returnNull: false,
	});

export default i18n;