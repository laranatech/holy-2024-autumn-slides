const { code, layout } = require('larana-js')
const { ListNContentSlideComponent } = require('./misc')

class TestingSlideComponent extends ListNContentSlideComponent {
	static steps = 4

	title() {
		return 'Тестирование (скоро)'
	}

	items(){
		return [
			{ value: 'e2e', label: 'E2E-тесты' },
			{ value: 'screenshots', label: 'Скриншотные тесты' },
			{ value: 'checksum', label: 'Использование чексуммы' },
		]
	}

	content() {
		const l = this.items()

		const rightPart = {
			e2e: code({
				value: [
					`const { test, expect, simulate } = require("larana-js")`,
					`const app = new LaranaApp({`,
					`    router, renderer, stateManager,`,
					`})`,
					``,
					`test(() => {`,
					`    const route = app.router.resolve("/login")`,
					`    const page = new route.page({})`,
					`    page.init()`,
					`    expect(page.state.loginButtonClicked).toBe(false)`,
					`    simulate(page, {`,
					`        event: "click", target: "loginButton",`,
					`    })`,
					`    expect(page.state.loginButtonClicked).toBe(true)`,
					`})`,
				],
			}),
			screenshots: code({
				value: [
					`const { test, expect } = require("larana-js")`,
					`const app = new LaranaApp({`,
					`    router, renderer, stateManager,`,
					`})`,
					``,
					`test(() => {`,
					`    const route = app.router.resolve("/login")`,
					`    const page = new route.page({})`,
					`    page.init()`,
					`    const image = app.renderer.render(page)`,
					`    expect(image).toBe(targetImage)`,
					`})`,
				],
			}),
			checksum: code({
				value: [
					`const { test, expect } = require("larana-js")`,
					`const app = new LaranaApp({`,
					`    router, renderer, stateManager,`,
					`})`,
					``,
					`test(() => {`,
					`    const route = app.router.resolve("/login")`,
					`    const page = new route.page({})`,
					`    page.init()`,
					`    const image = app.renderer.render(page)`,
					`    const imgChecksum = checksum(image)`,
					`    expect(imgChecksum).toMatchChecksum(target)`,
					`})`,
				],
			}),
			default: layout({}),
		}

		const currentItem = this.step - 2 >= 0 ? rightPart[l[this.step - 2].value] ?? rightPart.default : rightPart.default

		return currentItem
	}
}

module.exports = { TestingSlideComponent }
