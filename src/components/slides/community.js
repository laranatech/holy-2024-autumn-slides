const { text, image, layout } = require('larana-js')
const { SlideComponent } = require('./misc')

class CommunitySlideComponent extends SlideComponent {
	root() {
		const { h } = this.useResolution()

		return layout({
			children: [
				text({ value: 'Активное сообщество', style: 'h1' }),
				layout({
					style: [{ size: 9 }, 'gap_3'],
					children: [
						layout({}),
						image({
							style: { height: h * 0.85, aspectRatio: 448 / 776 },
							src: '/static/images/community_02.jpg',
						}),
						image({
							style: { height: h * 0.85, aspectRatio: 448 / 608 },
							src: '/static/images/community_01.jpg',
						}),
						image({
							style: { height: h * 0.85, aspectRatio: 719 / 1081 },
							src: '/static/images/larana-suit.jpg',
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { CommunitySlideComponent }
