const { layout, image, text, list, radio } = require('larana-js')
const { ListNContentSlideComponent } = require('./misc')

class ForWhoSlideComponent extends ListNContentSlideComponent {
	static steps = 10

	title() {
		return 'Кому нужна Larana'
	}

	items() {
		return [
			{ value: 'atms', label: 'Банкоматы' },
			{ value: 'clients', label: 'Тонкие клиенты' },
			{ value: 'exclusive', label: 'Платформы с экслюзивным и платным контентом' },
			{ value: 'quiz', label: 'Тестирования и опросы' },
			{ value: 'streaming', label: 'Стриминг' },
			{ value: 'games', label: 'Игры' },
			{ value: 'startups', label: 'Стартапы' },
			{ value: 'banners', label: 'Баннеры' },
			{ value: 'slides', label: 'Презентации' },
		]
	}

	content() {
		const l = this.items()

		const rightPart = {
			atms: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: '/static/images/atm.jpg',
						style: {
							aspectRatio: 1000 / 786,
						},
					}),
				],
			}),
			clients: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: '/static/images/slim22.jpg',
						style: {
							aspectRatio: 980 / 684,
						},
					}),
				],
			}),
			quiz: layout({
				style: ['card', 'p_5', 'column', 'gap_5'],
				children: [
					text({
						value: 'Что такое Larana?',
						style: 'h0',
					}),
					list({
						style: ['size_5', 'gap_5'],
						value: [
							'Фреймворк',
							'Протокол',
							'Библиотека',
							'Философия',
						],
						template: (item) => layout({
							style: ['hug', 'gap_5'],
							children: [
								layout({}),
								radio({
									model: 'quiz',
									name: item,
									style: {
										fg: item === 'Философия' ? 'var:accent' : '#f00',
									},
								}),
								text({
									value: item,
									style: ['h1', 'ta_start'],
								}),
								layout({}),
							],
						}),
					}),
				],
			}),
			exclusive: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: '/static/images/only-fans.jpg',
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
						src: '/static/images/engines.png',
						style: {
							aspectRatio: 953 / 576,
						},
					}),
				],
			}),
			startups: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: '/static/images/scream.png',
						style: {
							aspectRatio: 953 / 576,
						},
					}),
				],
			}),
			banners: layout({
				style: ['card', 'p_5', 'column'],
				children: [
					layout({ style: { size: 2 }}),
					text({ value: 'Для создания фреймворка', style: 'h0' }),
					text({ value: 'нужен всего лишь простой', style: 'h0' }),
					text({ value: 'советский копеечный...', style: 'h0' }),
					layout({ style: { size: 2 }}),
				],
			}),
			slides: layout({
				style: ['card', 'p_5'],
				children: [
					text({ value: 'Вы здесь', style: 'h0' }),
				],
			}),
			default: layout({}),
		}

		const currentItem = this.step - 2 >= 0 ? rightPart[l[this.step - 2].value] ?? rightPart.default : rightPart.default

		return currentItem
	}
}

module.exports = { ForWhoSlideComponent }
