const {
	text,
	layout,
	button,
	radio,
	checkbox,
	list,
	table,
	toggle,
	qr,
} = require('larana-js')
const { SlideComponent } = require('./misc')

class UIKitSlideComponent extends SlideComponent {
	root() {
		const { theme, toggleTheme } = this.useTheme()
		const { state } = this.useState()

		// TODO: tidy up

		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Встроенный UIKit',
				}),
				layout({
					style: ['row', 'gap_2', { size: 9 }],
					children: [
						layout({
							style: ['column', 'size_3'],
							children: [
								layout({
									style: 'gap_2',
									children: [
										layout({
											style: ['column', 'gap_2'],
											children: [
												button({ text: 'Button' }),
												button({ text: 'Select' }),
												button({ text: 'TextInput' }),
												button({ text: 'DatePicker' }),
											],
										}),
										list({
											style: ['column', 'gap_2'],
											value: [
												{ name: 'checkbox1', text: 'checkbox1', fg: '#ff0' },
												{ name: 'checkbox2', text: 'checkbox2', fg: '#f0f' },
												{ name: 'checkbox3', text: 'checkbox3', fg: '#00f' },
											],
											template: (item) => layout({
												style: ['gap_1', 'hug'],
												children: [
													radio({
														model: 'disabledCheckbox',
														name: item.name,
														style: { fg: item.fg },
													}),
													text({ value: item.text, style: ['h2', 'ta_start'] }),
												],
											}),
										}),
										layout({
											children: [
												list({
													style: ['column', 'gap_2'],
													value: ['checkbox1', 'checkbox2', 'checkbox3'],
													template: (item) => checkbox({
														model: item,
														disabled: item === state.disabledCheckbox,
													}),
												}),
												list({
													style: ['column', 'gap_2'],
													value: ['checkbox1', 'checkbox2', 'checkbox3'],
													template: (item) => toggle({
														model: item,
														disabled: item === state.disabledCheckbox,
													}),
												}),
											],
										}),
										toggle({
											value: theme === 'dark',
											onChange: () => toggleTheme(),
										}),
										qr({
											value: 'Hello, World!',
											style: { width: 256, aspectRatio: 1 },
										}),
									],
								}),
								table({
									columns: [
										{ name: 'col1', label: 'Column 1', size: 3 },
										{ name: 'col2', label: 'Column 2', size: 2 },
										{ name: 'col2', label: 'Column 3', size: 1 },
									],
									value: [
										{ col1: '1', col2: '2', col3: '3' },
										{ col1: '4', col2: '5', col3: '6' },
										{ col1: '7', col2: '8', col3: '9' },
									],
								}),
							],
						}),
						layout({
							style: 'column',
							children: [
								text({
									style: 'h2',
									value: 'Link',
								}),
								text({
									style: 'h2',
									value: 'List',
								}),
								list({
									value: ['ListItem1', 'ListItem2', 'ListItem3'],
								}),
							],
						}),
					],
				}),
			],
		})
	}
}

module.exports = { UIKitSlideComponent }
