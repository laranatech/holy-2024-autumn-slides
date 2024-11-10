const { ListNContentSlideComponent } = require('./misc')

class ConsSlideComponent extends ListNContentSlideComponent {
	static steps = 2

	title() {
		return 'Недостатки'
	}

	items() {
		return [
			{ label: 'Game changer' },
		]
	}
}

module.exports = { ConsSlideComponent }
