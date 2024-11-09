const { text, layout, throbber } = require('larana-js')
const { SlideComponent } = require('./misc')

class AnimationsSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Анимация',
				}),
				layout({
					style: ['column', 'gap_1', { size: 9 }],
					children: [
						layout({
							style: ['card', 'p_5'],
							children: [
								throbber({ model: 'throbber' }),
							],
						}),
					],
				}),
			],
		})
	}
}

module.exports = { AnimationsSlideComponent }
