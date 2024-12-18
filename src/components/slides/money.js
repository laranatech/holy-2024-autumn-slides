const { text, layout, image } = require('larana-js')
const { SlideComponent } = require('./misc')

class MoneySlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({ value: '$$$', style: 'h1' }),
				layout({
					style: { size: 9, gap: 'var:u5' },
					children: [
						layout({}),
						layout({
							style: ['card', 'p_5', 'column', 'hug'],
							children: [
								image({
									style: { width: 680, aspectRatio: 680 / 661 },
									src: '/static/images/money_empty.jpg',
								}),
								text({ value: 'Other devs', style: 'h1' }),
							],
						}),
						layout({
							style: ['card', 'p_5', 'column', 'hug'],
							children: [
								image({
									style: { width: 680, aspectRatio: 680 / 661 },
									src: '/static/images/money_full.jpg',
								}),
								text({ value: 'Larana Devs', style: 'h1' }),
							],
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { MoneySlideComponent }
