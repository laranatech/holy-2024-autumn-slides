const { text, layout } = require('larana-js')
const { SlideComponent } = require('./misc')

class GameSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Demo: game',
				}),
				layout({
					style: ['column', 'gap_1', { size: 9 }],
					children: [
						text({
							style: 'h2',
							value: 'Тут будет демо игры', // TODO
						}),
						// text({
						// 	style: 'h2',
						// 	value: 'ссылка на сайт',
						// }),
					],
				}),
			],
		})
	}
}

module.exports = { GameSlideComponent }
