const { text, layout, figure, line, arc, point, useStyleVar, rect } = require('larana-js')
const { SlideComponent } = require('./misc')

class GameSlideComponent extends SlideComponent {

	initialized = false

	init() {
		const { state, setState } = this.useState()

		if (state.game) {
			return
		}

		setState({
			game: {
				initialized: true,
				currentPlayer: 'x',
				field: [
					['x', 'o', 'o'],
					['o', 'x', 'o'],
					['o', 'x', 'x'],
				],
			},
		})
	}

	restart() {
		const { setState } = this.useState()

		setState({
			game: undefined,
		}, { needsRerender: false })

		this.init()
	}

	getWinner() {
		const { state } = this.useState()
		const field = state.game.field

		let winner = ''

		return ''
	}

	drawGrid(fig, queue) {
		const { theme } = this.useTheme()
		const { x, y, w, h } = fig.computeDimensions()

		const lineStyle = {
			borderColor: useStyleVar('componentBorderColor')(theme),
			borderWidth: 3,
		}

		line({
			points: [
				point({ x, y: y + h * 0.33 }),
				point({ x: x + w, y: y + h * 0.33 }),
			],
			...lineStyle,
		}).to(queue)

		line({
			points: [
				point({ x, y: y + h * 0.66 }),
				point({ x: x + w, y: y + h * 0.66 }),
			],
			...lineStyle,
		}).to(queue)

		line({
			points: [
				point({ x: x + w * 0.33, y }),
				point({ x: x + w * 0.33, y: y + h }),
			],
			...lineStyle,
		}).to(queue)

		line({
			points: [
				point({ x: x + w * 0.66, y }),
				point({ x: x + w * 0.66, y: y + h }),
			],
			...lineStyle,
		}).to(queue)
	}

	computeCol(fig, { r, c }) {
		const { x, y, w, h } = fig.computeDimensions()

		const colWidth = w / 3
		const colHeight = h / 3

		return {
			x: x + c * colWidth,
			y: y + r * colHeight,
			w: colWidth,
			h: colHeight,
		}
	}

	drawX(fig, queue, { r, c }) {
		const { x, y, w, h } = this.computeCol(fig, { r, c })

		const xStyle = {
			borderWidth: 10,
			borderColor: '#00f',
		}

		line({
			points: [],
		}).to(queue)
	}

	drawO(fig, queue, { r, c }) {
		const { x, y, w, h } = this.computeCol(fig, { r, c })

		arc({
			x: x + w * 0.5,
			y: y + h * 0.5,
			radius: 50,
			borderWidth: 10,
			borderColor: '#00f',
		}).to(queue)
	}

	drawMarks(fig, queue) {
		const { state } = this.useState()
		const { x, y, w, h } = fig.computeDimensions()

		if (!state.game) {
			return
		}

		const field = state.game.field

		field.forEach((row, r) => {
			row.forEach((col, c) => {
				if (col === 'x') {
					this.drawX(fig, queue, { r, c })
				} else if (col === 'o') {
					this.drawO(fig, queue, { r, c })
				}
			})
		})
	}

	root() {
		this.init()

		return layout({
			children: [
				text({
					style: 'h1',
					value: 'Demo: game',
				}),
				layout({
					style: ['card', { size: 9 }, 'p_5'],
					children: [
						layout({}),
						figure({
							style: 'size_2',
							template: (fig, queue) => {
								const { x, y, w, h } = fig.computeDimensions()
								this.drawGrid(fig, queue)
								this.drawMarks(fig, queue)
							},
						}),
						layout({}),
					],
				}),
			],
		})
	}
}

module.exports = { GameSlideComponent }
