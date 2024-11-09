const {
	SlidesPage,
	NotFoundPage,
} = require('./pages')

module.exports = {
	routes: [
		{ path: '/', name: 'holy-slides', page: SlidesPage },

		{ path: '404', name: 'not-found', page: NotFoundPage },
	],
}
