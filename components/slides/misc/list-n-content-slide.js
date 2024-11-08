const { text, layout, list } = require('larana-js')
const { SlideComponent } = require('./slide.js')

class ListNContentSlideComponent extends SlideComponent {
	getTitle() {
		return 'No title'
	}

	getList() {
		return []
	}

	getContent() {
		return layout({})
	}

	getTemplate() {
		return (item, i) => {
			return text({
				style: [
					'h1',
					{
						height: 'var:componentHeight',
						textAlign: 'start',
					},
				],
				value: `${i + 1}. ${item.label}`,
			})
		}
	}

	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: this.getTitle(),
				}),
				layout({
					style: { size: 9 },
					children: [
						list({
							style: ['gap_5', 'p_5'],
							value: this.getList(),
							offset: 0,
							limit: this.step - 1,
							template: this.getTemplate(),
						}),
						layout({
							children: [
								this.getContent(),
							],
						}),
					],
				}),
			],
		})
	}
}

module.exports = { ListNContentSlideComponent }
