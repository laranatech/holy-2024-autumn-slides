const { text, layout, image } = require('larana-js')
const { SlideComponent } = require('./misc')

class TechmeetupSlideComponent extends SlideComponent {
	static steps = 3

	root() {
		const { h } = this.useResolution()

		return layout({
			children: [
				text({ value: 'Первые шаги', style: 'h1' }),
				layout({
					style: { size: 9 },
					children: [
						layout({}),
						image({
							style: { height: h * 0.85, aspectRatio: 1000 / 667 },
							src: [
								'/static/images/techmeetup.jpg',
								'/static/images/techmeetup_fun.jpg',
								'/static/images/techmeetup_sad.jpg',
							][this.step-1],
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { TechmeetupSlideComponent }
