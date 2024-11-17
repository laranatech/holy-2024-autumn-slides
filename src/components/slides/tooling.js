const { text, layout, image, list, code } = require('larana-js')
const { ListNContentSlideComponent } = require('./misc')

class ToolingSlideComponent extends ListNContentSlideComponent {
	static steps = 7

	title() {
		return 'Tooling'
	}

	items() {
		return [
			{ value: 'init', label: 'npm init larana-js' },
			{ value: 'cli', label: 'clirana' },
			{ value: 'schemer', label: 'schemer' },
			{ value: 'exporter', label: 'exporter' },
			{ value: 'testing', label: 'testing' },
			{ value: 'laranigma', label: 'Ligma' },
		]
	}

	content() {
		const l = this.items()

		const rightPart = {
			init: code({
				value: [
					`> npm init larana-js`,
					`< Port: 1610`,
					`< Rendering: Server`,
					`< Router: Default`,
					`< State manager: Redis`,
					`< Create static dir: Y`,
				],
			}),
			cli: code({
				value: [
					`// New page`,
					`> clirana new page`,
					`< Page name: "Slides"`,
					`< Title: "HolyJS 2024 Autumn"`,
					`< Route url: "/slides"`,
					``,
					`// New component`,
					`> clirana new component`,
					`< Component name: "Slide"`,
					`< With hooks: Y`,
				],
			}),
			schemer: code({
				value: [
					`const validateStyles = createScheme({`,
					`    bg: "string"`,
					`    width: "?number"`,
					`    height: {`,
					`        type: "number",`,
					`        required: false,`,
					`        rules: [rules.positive(), rules.max(screenWidth)]`,
					`    },`,
					`})`,
					``,
					`> validateStyles(styles)`,
					`< "Invalid: height must be positive, got -10"`,
				],
			}),
			
			exporter: layout({
				style: ['card', 'p_5'],
				children: [
					text({ value: 'UI => PDF', style: 'h0' }),
				],
			}),
			default: layout({}),
		}

		const currentItem = this.step - 2 >= 0 ? rightPart[l[this.step - 2].value] ?? rightPart.default : rightPart.default

		return currentItem
	}
}

module.exports = { ToolingSlideComponent }
