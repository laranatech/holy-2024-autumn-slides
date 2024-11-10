const { text, layout, image } = require('larana-js')
const { SlideComponent } = require('./misc')

class DesignerSlideComponent extends SlideComponent {
	root() {
		const { h } = this.useResolution()

		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Laranigma (Скоро)',
				}),
				layout({
					style: { size: 9 },
					children: [
						layout({}),
						image({
							style: { height: h * 0.85, aspectRatio: 1280 / 720 },
							src: '/static/images/designer.png',
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { DesignerSlideComponent }
