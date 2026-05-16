// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxthub/core", "@nuxtjs/tailwindcss"],
	hub: {
		db: "sqlite",
	},
	runtimeConfig: {
		tursoUrl: process.env.TURSO_DATABASE_URL,
		tursoToken: process.env.TURSO_AUTH_TOKEN,
	},
});
