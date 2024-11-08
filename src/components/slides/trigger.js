const { text, layout, code, image, donutChart } = require('larana-js')
const { ListNContentSlideComponent } = require('./misc')

class TriggerSlideComponent extends ListNContentSlideComponent {
	static steps = 10

	getTitle() {
		return 'Зачем нужен ещё один фреймворк?'
	}

	getList() {
		const { state } = this.useState()

		return state.problems
	}

	getContent() {
		const problems = this.getList()

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
							{ value: 18, label: '1366x768', color: '#577ab7' },
							{ value: 12, label: '1920x1080', color: '#e25c4c' },
							{ value: 9, label: '360x640', color: '#f4a43b' },
							{ value: 4, label: '1280x1024', color: '#279952' },
							{ value: 4, label: '1440x900', color: '#8c3189' },
							{ value: 3, label: '360x720', color: '#1d8bb3' },
							{ value: 2, label: '375x667', color: '#c7406d' },
							{ value: 2, label: '360x780', color: '#59973c' },
							{ value: 1, label: '1024x768', color: '#a62f2e' },
							{ value: 15, label: 'Другие', color: '#2e6189' },
						
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
						src: 'https://kucheriavyi.ru/images/slides/loopa.png',
						style: {
							aspectRatio: 2136 / 1308,
							width: 1200,
						},
					}),
				],
			}),
			build: layout({
				style: ['card', 'p_5'],
			}), // TODO
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
					`> const numbers = [1,3, 2, 5, 11, 300]`,
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
						src: 'https://kucheriavyi.ru/images/slides/coder-designer.jpg',
						style: {
							aspectRatio: 1138 / 1012,
						},
					}),
				],
			}),
			testing: layout({}), // TODO
			misc: layout({}), // TODO
			default: layout({}),
		}

		const currentItem = this.step - 2 >= 0 ? rightPart[problems[this.step - 2].value] ?? rightPart.default : rightPart.default

		return currentItem
	}
}

module.exports = { TriggerSlideComponent }
