const { layout, text, list } = require('larana-js')
const { SlideComponent } = require('./misc')

class WhatIsLaranaSlideComponent extends SlideComponent {
	static steps = 3

	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Что такое LaranaJS',
				}),
				list({
					style: { size: 9 },
					value: [
						'Larana — философия', // TODO:
						'LaranaJS — имплементация', // TODO:
					],
					offset: 0,
					limit: this.step -1,
					template: (line) => text({ value: line, style: 'h0' }),
				}),
			],
		})
	}
}

module.exports = { WhatIsLaranaSlideComponent }
