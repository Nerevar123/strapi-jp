import favicon from './extensions/favicon.png';

export default {
	config: {
		locales: ['he', 'ru'],
		head: {
			favicon: favicon,
		},
	},
	bootstrap(app) {
		console.log(app);
	},
};
