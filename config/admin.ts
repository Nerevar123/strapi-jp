export default ({ env }) => ({
	auth: {
		secret: env("ADMIN_JWT_SECRET"),
	},
	apiToken: {
		salt: env("API_TOKEN_SALT"),
	},
	rateLimit: {
		interval: { hour: 1, min: 30 },
		timeWait: 3 * 1000,
		max: 10,
	},
});
