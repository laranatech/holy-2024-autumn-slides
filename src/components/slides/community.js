const { text, image, layout } = require('larana-js')
const { SlideComponent } = require('./misc')

class CommunitySlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({ value: 'Активное сообщество', style: 'h1' }),
				layout({
					style: [{ size: 9 }, 'gap_2'],
					children: [
						image({
							style: { size: 2 },
							src: '/static/images/larana-suit.jpg', // TODO:
						}),
						image({
							style: { size: 2 },
							src: '/static/images/larana-suit.jpg', // TODO:
						}),
						image({
							style: { size: 2 },
							src: '/static/images/larana-suit.jpg', // TODO:
						}),
						image({
							style: { size: 2 },
							src: '/static/images/larana-suit.jpg',
						}),
					],
				}),
			],
		})
	}
}

module.exports = { CommunitySlideComponent }
