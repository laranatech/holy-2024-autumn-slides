const { text, layout } = require('larana-js')
const { SlideComponent } = require('./misc')

class OtherImplementationsSlideComponent extends SlideComponent {
	static steps = 7

	card({ i, lang, title, transcription = '', bg = 'var:componentBg', fg = 'var:fg' }) {
		const defaultBg = 'var:componentBg'
		const defaultFg = 'var:fg'

		const active = this.step >= i
		return layout({
			style: {
				borderColor: 'var:componentBorderColor',
				direction: 'column',
				padding: 'var:u5',
				radius: 'var:radius',
				bg: active ? bg : defaultBg,
			},
			children: [
				text({
					value: lang,
					style: ['h2', { textAlign: 'start', fg: active ? fg : defaultFg }],
				}),
				text({
					value: active ? title : '',
					style: ['h0', 'size_4', { fg: active ? fg : defaultFg }],
				}),
				text({
					value: this.step >= i + 1 ? transcription : '',
					style: ['h1', { fg: active ? fg : defaultFg }],
				}),
			],
		})
	}

	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Имплементации Larana',
				}),
				layout({
					style: { size: 9, direction: 'column', gap: 'var:u5' },
					children: [
						layout({
							style: 'gap_5',
							children: [
								this.card({ i: 1, lang: 'JavaScript', title: 'LaranaJS', bg: '#f7df1e', fg: '#000' }),
								this.card({ i: 2, lang: 'Rust', title: 'LaranaRS', bg: '#e43716', fg: '#000' }),
								this.card({ i: 3, lang: 'Java', title: 'Javarana', bg: '#0d6eb5', fg: '#fff' }),
							],
						}),
						layout({
							style: 'gap_5',
							children: [
								this.card({ i: 4, lang: 'Go', title: 'Gorana', bg: '#00add8', fg: '#000' }),
								this.card({ i: 5, lang: 'PHP', title: 'Laranavel', bg: '#474a8a' }),
								this.card({ i: 6, lang: 'Python', title: 'Pylarana', transcription: '[п’илар`ама]', fg: '#366e9f', bg: '#ffd648' }),
							],
						}),
					],
				}),
			],
		})
	}
}

module.exports = { OtherImplementationsSlideComponent }
