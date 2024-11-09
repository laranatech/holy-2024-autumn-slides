const { text, layout, image } = require('larana-js')
const { SlideComponent } = require('./misc')

class ForLaranaSlideComponent extends SlideComponent {
	root() {
		const { h } = this.useResolution()

		return layout({
			children: [
				text({ value: 'Что ты можешь сделать для Larana?', style: 'h1' }),
				layout({
					style: { size: 9 },
					children: [
						layout({}),
						image({
							style: { height: h * 0.85, aspectRatio: 1200 / 628 },
							src: '/static/images/point_larana.jpg',
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { ForLaranaSlideComponent }
