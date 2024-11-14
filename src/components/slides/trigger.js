const { text, layout, code, image, donutChart } = require('larana-js')
const { ListNContentSlideComponent } = require('./misc')

class TriggerSlideComponent extends ListNContentSlideComponent {
	static steps = 10

	title() {
		return 'Зачем нужен ещё один фреймворк?'
	}

	items() {
		const { state } = this.useState()

		return state.problems
	}

	content() {
		const problems = this.items()

		const rightPart = {
			load: layout({
				style: ['column', 'radius', { bg: 'var:componentBg' }],
				children: [
					layout({}),
					layout({}),
					text({
						style: 'h0',
						value: '90% пользователей',
					}),
					text({
						style: 'h0',
						value: 'используют устройство',
					}),
					text({
						style: 'h0',
						value: 'дешевле 300$',
					}),
					layout({}),
					layout({}),
				],
			}),
			clients: layout({
				style: [
					{
						radius: 'var:radius',
						bg: 'var:componentBg',
						padding: 'var:u5',
					},
				],
				children: [
					donutChart({
						value: [
							{ value: 66.68, label: 'Chrome', color: '#577ab7' },
							{ value: 18.07, label: 'Safari', color: '#e25c4c' },
							{ value: 5.25, label: 'Edge', color: '#f4a43b' },
							{ value: 2.65, label: 'Firefox', color: '#279952' },
							{ value: 2.23, label: 'Samsung Internet', color: '#8c3189' },
							{ value: 2.2, label: 'Opera', color: '#1d8bb3' },
						],
					}),
				],
			}),
			state: layout({
				style: {
					radius: 'var:radius',
					bg: 'var:componentBg',
					padding: 'var:u5',
				},
				children: [
					image({
						src: '/static/images/loopa.png',
						style: {
							aspectRatio: 2136 / 1308,
							width: 1200,
						},
					}),
				],
			}),
			build: layout({
				style: ['card', 'p_5'],
				children: [
					text({ value: 'Code in the Dark', style: 'h0' }),
				],
			}),
			html: code({
				value: [
					'<ul>',
					'    <li>Item 1</li>',
					'    <li>Item 2</li>',
					'    <li>Item 3',
					'    <li>Item 4</li>',
					'    <li>Item 5</li>',
					'</ul>',
				],
			}),
			js: code({
				lineNumbers: false,
				value: [
					`> const numbers = [1, 3, 2, 5, 11, 300]`,
					`> numbers.sort()`,
					`< [1, 11, 2, 3, 300, 5]`,
					'',
					'// using old browser',
					`> numbers.toSorted()`,
					`< "toSorted" is undefined`,
				],
			}),
			design: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: '/static/images/coder-designer.jpg',
						style: {
							aspectRatio: 1138 / 1012,
						},
					}),
				],
			}),
			testing: layout({
				style: ['card', 'p_5', 'column'],
				children: [
					layout({ style: { size: 4 }}),
					text({ value: 'Заходит тестировщик', style: 'h0' }),
					text({ value: 'в бар...', style: 'h0' }),
					layout({ style: { size: 4 }}),
				],
			}),
			misc: layout({
				style: ['card', 'p_5'],
				children: [
					image({
						src: '/static/images/long-list.jpg',
						style: {
							aspectRatio: 864 / 720,
						},
					}),
				],
			}),
			default: layout({}),
		}

		const currentItem = this.step - 2 >= 0 ? rightPart[problems[this.step - 2].value] ?? rightPart.default : rightPart.default

		return currentItem
	}
}

module.exports = { TriggerSlideComponent }
