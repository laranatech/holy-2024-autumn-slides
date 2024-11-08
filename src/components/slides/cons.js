const { ListNContentSlideComponent } = require('./misc')

class ConsSlideComponent extends ListNContentSlideComponent {
	static steps = 2

	getTitle() {
		return 'Недостатки'
	}

	getList() {
		return [
			{ label: 'Game changer' },
		]
	}
}

module.exports = { ConsSlideComponent }
