const { text, layout } = require('larana-js')
const { SlideComponent } = require('./misc')
const { XOGame } = require('../xo-game.js')

class GameSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Demo: game',
				}),
				layout({
					style: ['card', { size: 9 }, 'p_5'],
					children: [
						layout({ style: { size: 0.5 } }),
						new XOGame({}),
						layout({ style: { size: 0.5 } }),
					],
				}),
			],
		})
	}
}

module.exports = { GameSlideComponent }
