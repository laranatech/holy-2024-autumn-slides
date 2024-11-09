const { text, layout, image } = require('larana-js')
const { SlideComponent } = require('./misc')

class HypeSlideComponent extends SlideComponent {
	root() {
		const { h } = this.useResolution()

		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Hype.js',
				}),
				layout({
					style: { size: 9 },
					children: [
						layout({}),
						image({
							style: { height: h * 0.85, aspectRatio: 1280 / 720 },
							src: '/static/images/hypejs.jpg',
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { HypeSlideComponent }
