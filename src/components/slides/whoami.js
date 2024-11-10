const { layout, image } = require('larana-js')
const { ListNContentSlideComponent } = require('./misc')

class WhoamiSlideComponent extends ListNContentSlideComponent {
	static steps = 9

	title() {
		return 'Женя Кучерявый'
	}

	items() {
		return [
			{ value: 'portrait', label: 'Программировал 10+ лет' },
			{ value: 'portrait', label: 'Поднимал и ронял стартапы' },
			{ value: 'portrait', label: 'Вносил вклад в MDN и Nuxt' },
			{ value: 'portrait', label: 'Организовывал BeerJS Moscow DrinkUp' },
			{ value: 'portrait', label: 'Писал в канал «Директор фронтенда» и на хабр' },
			{ value: 'portrait', label: 'Служил в церкви' },
			{ value: 'portrait', label: 'Умер и воскрес (клиническая смерть)' },
			{ value: 'wink', label: 'Изобрёл LaranaJS' },
		]
	}

	content() {
		return layout({
			children: [
				layout({}),
				image({
					src: `/static/images/${ this.step === 9 ? 'wink' : 'portrait' }_1.webp`,
					style: { width: 460, aspectRatio: 9 / 16 },
				}),
			],
		})
	}
}

module.exports = { WhoamiSlideComponent }
