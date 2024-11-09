const { text, layout, image } = require('larana-js')
const { SlideComponent } = require('./misc')

class SeoSlideComponent extends SlideComponent {
	root() {
		const { h } = this.useResolution()

		return layout({
			children: [
				text({
					style: 'h1',
					value: 'SEO',
				}),
				layout({
					style: { size: 9 },
					children: [
						layout({}),
						image({
							style: { height: h * 0.85, aspectRatio: 640 / 427 },
							src: '/static/images/seo.jpeg',
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { SeoSlideComponent }
