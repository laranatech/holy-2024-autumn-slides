const { BaseComponent, figure, click, arc, line, point, useStyleVar, layout } = require('larana-js')

function checkWinner(game) {
	const field = game.field

	// Define all possible winning combinations
	const winningCombinations = [
		// Rows
		[[0, 0], [0, 1], [0, 2]],
		[[1, 0], [1, 1], [1, 2]],
		[[2, 0], [2, 1], [2, 2]],
		// Columns
		[[0, 0], [1, 0], [2, 0]],
		[[0, 1], [1, 1], [2, 1]],
		[[0, 2], [1, 2], [2, 2]],
		// Diagonals
		[[0, 0], [1, 1], [2, 2]],
		[[0, 2], [1, 1], [2, 0]]
	]

	// Check each winning combination
	for (const combination of winningCombinations) {
		const [a, b, c] = combination
		const first = field[a[0]][a[1]]
		const second = field[b[0]][b[1]]
		const third = field[c[0]][c[1]]

		if (first && first === second && first === third) {
			return { winner: first, combination }
		}
	}

	// If no winner is found, return null
	return { winner: null, combination: null }
}

class XOGame extends BaseComponent {
	init() {
		const { state, setState } = this.useState()

		if (state.game) {
			return
		}

		setState({
			game: {
				winner: null,
				currentPlayer: 'x',
				field: [
					['', '', ''],
					['', '', ''],
					['', '', ''],
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
		const { state, setState } = this.useState()
		if (!state.game || state.game.winner) {
			return
		}

		const { winner } = checkWinner(state.game)

		if (winner) {
			setState({
				game: {
					...state.game,
					winner,
				},
			})
		}

		return winner
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
			borderColor: '#f00',
			borderCap: 'round',
		}

		line({
			points: [
				point({ x: x + w * 0.1, y: y + h * 0.1 }),
				point({ x: x + w * 0.9, y: y + h * 0.9 }),
			],
			...xStyle,
		}).to(queue)

		line({
			points: [
				point({ x: x + w * 0.9, y: y + h * 0.1 }),
				point({ x: x + w * 0.1, y: y + h * 0.9 }),
			],
			...xStyle,
		}).to(queue)
	}

	drawO(fig, queue, { r, c }) {
		const { x, y, w, h } = this.computeCol(fig, { r, c })

		arc({
			x: x + w * 0.5,
			y: y + h * 0.5,
			radius: h * 0.4,
			borderWidth: 10,
			borderColor: '#00f',
		}).to(queue)
	}

	drawMarks(fig, queue) {
		const { state } = this.useState()

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

	handleClick() {
		const { state, setState } = this.useState()

		if (!state.game || state.game.winner) {
			return
		}

		const { currMouse } = this.useMouse()

		const p = point({ x: currMouse.x, y: currMouse.y })

		const field = state.game.field

		for (let r = 0; r < 3; r++) {
			for (let c = 0; c < 3; c++) {
				if (field[r][c] !== '') {
					continue
				}
				if (!p.collide(this.computeCol(this, { r, c }))) {
					continue
				}

				field[r][c] = state.game.currentPlayer
				setState({
					game: {
						field,
						currentPlayer: state.game.currentPlayer === 'x' ? 'o' : 'x',
					},
				})
				return
			}
		}
	}

	root() {
		this.init()

		return layout({
			children: [
				figure({
					style: 'size_2',
					events: [
						click({
							handler: () => this.handleClick(),
						}),
					],
					template: (fig, queue) => {
						this.drawGrid(fig, queue)
						this.drawMarks(fig, queue)

						const winner = this.getWinner()
					},
				}),
			],
		})
	}
}

module.exports = { XOGame }
