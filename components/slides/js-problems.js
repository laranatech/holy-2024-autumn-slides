const { text, layout } = require('larana-js')
const { SlideComponent } = require('./misc')
const { ProblemsComponent } = require('./misc')

class JSProblemsSlideComponent extends SlideComponent {
	static steps = 1

	root() {
		return layout({
			style: ['column', 'gap_1'],
			children: [
				text({
					style: 'h1',
					value: 'Решение проблем на уровне имплементации',
				}),
				layout({}),
				new ProblemsComponent({}),
			],
		})
	}
}

module.exports = { JSProblemsSlideComponent }
