const { text, layout, list } = require('larana-js')
const { SlideComponent } = require('./misc')

class RealSSRSlideComponent extends SlideComponent {
	static steps = 2

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
						this.step === 1 ? text({
							style: 'h0',
							value: 'Фреймворк сам решает, как всё рендерить',
						}) : layout({
							style: ['card', 'column', 'gap_5', 'p_5'],
							children: [
								layout({}),
								list({
									style: ['gap_5'],
									value: [
										'Ре́ндеринг или отрисо́вка — процесс получения',
										'изображения по модели с помощью',
										'компьютерной программы.',
									],
									template: (line) => text({
										value: line,
										style: ['h0', { height: 'var:componentHeight' }],
									}),
								}),
								layout({}),
							],
						}),
					],
				}),
			],
		})
	}
}

module.exports = { RealSSRSlideComponent }
