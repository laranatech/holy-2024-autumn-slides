const { text, layout, table } = require('larana-js')
const { SlideComponent } = require('./misc')

class UIKitSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Таблицы',
				}),
				layout({
					style: ['row', 'gap_2', { size: 9 }],
					children: [
						table({
							columns: [
								{ name: 'framework', label: 'Фреймворк', size: 3 },
								{ name: 'love', label: 'Любовь разработчиков', size: 2 },
							],
							value: [
								{ framework: 'LaranaJS', love: '100%' },
								{ framework: 'Svelte', love: '70%' },
								{ framework: 'Vue', love: '62%' },
								{ framework: 'Solid', love: '46%' },
								{ framework: 'Qwik', love: '33%' },
								{ framework: 'Angular', love: '32%' },
								{ framework: 'Alpine.js', love: '21%' },
							],
						}),
					],
				}),
			],
		})
	}
}

module.exports = { UIKitSlideComponent }
