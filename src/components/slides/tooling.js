const { text, layout } = require('larana-js')
const { SlideComponent } = require('./misc')

class ToolingSlideComponent extends SlideComponent {
	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Tooling в LaranaJS',
				}),
				layout({
					style: ['column', 'gap_1', { size: 9 }],
					children: [
						text({
							style: 'h2',
							value: 'npm init larana-js', // TODO:
						}),
						text({
							style: 'h2',
							value: 'schemer', // TODO:
						}),
						text({
							style: 'h2',
							value: 'logger', // TODO:
						}),
						text({
							style: 'h2',
							value: 'testing', // TODO:
						}),
						text({
							style: 'h2',
							value: 'Laranigma', // TODO:
						}),
						text({
							style: 'h2',
							value: 'larana-cli', // TODO:
						}),
					],
				}),
			],
		})
	}
}

module.exports = { ToolingSlideComponent }
