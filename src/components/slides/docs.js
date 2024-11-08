const { text, layout, qr } = require('larana-js')
const { SlideComponent } = require('./misc')

class DocsSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({ value: 'Документация', style: 'h1' }),
				layout({
					style: { size: 9, gap: 16 },
					children: [
						layout({
							style: ['card', 'p_5', 'column', 'gap_2'],
							children: [
								layout({
									style: { size: 9 },
									children: [
										layout({}),
										qr({
											style: { size: 9 },
											value: 'https://js-docs.larana.tech',
										}),
										layout({}),
									],
								}),
								text({ style: 'h0', value: 'https://js-docs.larana.tech' }),
							],
						}),
						layout({
							style: ['card', 'p_5', 'column', 'gap_2'],
							children: [
								layout({
									style: { size: 9 },
									children: [
										layout({}),
										qr({
											style: { size: 9 },
											value: 'https://t.me/+oiDOgBndnZ5hYzIy',
										}),
										layout({}),
									],
								}),
								text({ style: 'h0', value: '@laranatech' }),
							],
						}),
					],
				}),
			],
		})
	}
}

module.exports = { DocsSlideComponent }
