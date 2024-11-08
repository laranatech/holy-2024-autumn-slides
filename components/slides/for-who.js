const { layout, image, text } = require('larana-js')
const { ListNContentSlideComponent } = require('./misc')

class ForWhoSlideComponent extends ListNContentSlideComponent {
	static steps = 6

	getTitle() {
		return 'Кому нужна Larana'
	}

	getList() {
		return [
			{ value: 'atms', label: 'Банкоматы' },
			{ value: 'clients', label: 'Тонкие клиенты' },
			{ value: 'exclusive', label: 'Платформы с экслюзивным и платным контентом' },
			{ value: 'streaming', label: 'Стриминг' },
			{ value: 'games', label: 'Игры' },
		]
	}

	getContent() {
		const l = this.getList()

		const rightPart = {
			atms: layout({
				style: ['card', 'p_5'],
			}), // TODO: breaking bad
			clients: layout({
				style: ['card', 'p_5'],
			}), // TODO: Cat on slim tv
			exclusive: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: 'https://kucheriavyi.ru/images/slides/only-fans.jpg',
						style: {
							aspectRatio: 1138 / 1012,
						},
					}),
				],
			}),
			streaming: layout({
				style: ['card', 'p_5'],
				children: [
					text({ value: 'Осуждаю', style: 'h0' }),
				],
			}),
			games: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: 'https://kucheriavyi.ru/images/slides/engines.png',
						style: {
							aspectRatio: 953 / 576,
						},
					}),
				],
			}),
			default: layout({}),
		}

		const currentItem = this.step - 2 >= 0 ? rightPart[l[this.step - 2].value] ?? rightPart.default : rightPart.default

		return currentItem
	}
}

module.exports = { ForWhoSlideComponent }
