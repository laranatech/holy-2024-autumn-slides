const { text, layout, list } = require('larana-js')
const { SlideComponent } = require('./misc')

class ImplementationSlideComponent extends SlideComponent {
	static steps = 2

	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Имплементация Larana',
				}),
				layout({}),
				list({
					style: ['column', 'gap_5', { size: 8 }],
					offset: 0,
					limit: this.step,
					value: [
						'Похожие инструменты', // TODO
						'Другой результат', // TODO
					],
					template: (line) => text({
						style: ['h0'],
						value: line,
					}),
				}),
			],
		})
	}
}

module.exports = { ImplementationSlideComponent }
