const { text, layout } = require('larana-js')
const { SlideComponent } = require('./misc')

class TestingSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Тестирование LaranaJS',
				}),
				layout({
					style: ['column', 'gap_1', { size: 9 }],
					children: [
						text({
							style: 'h2',
							value: 'Использование стейта в тестах', // TODO:
						}),
						text({
							style: 'h2',
							value: 'скриншотные тесты', // TODO:
						}),
						text({
							style: 'h2',
							value: 'скриншотные тесты с чексуммой', // TODO:
						}),
					],
				}),
			],
		})
	}
}

module.exports = { TestingSlideComponent }
