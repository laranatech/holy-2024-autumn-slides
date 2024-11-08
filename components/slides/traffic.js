const { text, layout, pieChart } = require('larana-js')
const { SlideComponent } = require('./misc/slide')

class TrafficSlideComponent extends SlideComponent {
	static steps = 2

	root() {
		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Потребление трафика',
				}),
				layout({
					style: ['column', 'gap_1', { size: 9 }],
					children: [
						[
							text({
								style: 'h0',
								value: 'Сколько трафика потребляет ларана?',
							}),
							layout({
								style: ['card', 'p_5', 'column', 'gap_2'],
								children: [
									pieChart({ model: 'trafficConsumption' }),
								],
							}),
						][this.step-1],
					],
				}),
			],
		})
	}
}

module.exports = { TrafficSlideComponent }
