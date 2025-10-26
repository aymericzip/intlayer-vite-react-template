import { type IntlayerConfig, Locales } from "intlayer";

const config: IntlayerConfig = {
	internationalization: {
		locales: [
			Locales.ENGLISH,
			Locales.FRENCH,
			Locales.SPANISH,
			// Vos autres langues
		],
		defaultLocale: Locales.ENGLISH,
	},
	editor: {
		applicationURL: "http://localhost:5173",
		enabled: true,
		cmsURL: "http://localhost:3000",
		editorURL: "http://localhost:8000",
		backendURL: "http://localhost:3100",
		clientId: process.env.INTLAYER_CLIENT_ID,
		clientSecret: process.env.INTLAYER_CLIENT_SECRET,
		liveSync: true,
	},
	build: {
		optimize: true,
		importMode: "dynamic",
	},
	ai: {
		apiKey: process.env.INTLAYER_AI_API_KEY,
	},
};

export default config;
