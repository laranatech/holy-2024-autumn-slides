const { text, layout } = require('larana-js')
const { SlideComponent } = require('./misc')

class RealSSRSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Настоящий SSR/CSR',
				}),
				layout({
					style: ['column', 'gap_1', { size: 9 }],
					children: [
						text({
							style: 'h0',
							value: 'Фреймворк сам решает, как всё рендерить', // TODO: wiki quote
						}),
					],
				}),
			],
		})
	}
}

module.exports = { RealSSRSlideComponent }
