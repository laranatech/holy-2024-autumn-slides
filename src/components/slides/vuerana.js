const { text, layout, image, code } = require('larana-js')
const { SlideComponent } = require('./misc')

class VueranaSlideComponent extends SlideComponent {
	static steps = 2

	root() {
		const { w } = this.useResolution()

		const vueranaCode = code({
			style: { size: 9 },
			value: [
				`<template>`,
				`    <layout `,
				`        :style="{`,
				`            bg: 'var:bg',`,
				`            gap: 8,`,
				`            direction: 'column'`,
				`        }"`,
				`    >`,
				`        <AppHeader :style="{ size: 1 }" />`,
				`        <layout :style="{ size: 9 }">`,
				`            <text value="Home" />`,
				`        </layout>`,
				`    </layout>`,
				`</template>`,
			],
		})

		return layout({
			children: [
				layout({
					style: { size: 2, direction: 'column', alignment: 'start' },
					children: [
						text({ value: [
							'Vue + React = Vueact',
							'Vue + Larana = Vuerana',
						][this.step-1], style: 'h1' }),
						[
							layout({
								style: { size: 9 },
								children: [
									image({
										style: { width: w * 0.99, aspectRatio: 1350 / 517 },
										src: 'https://kucheriavyi.ru/images/slides/vueact.png',
									}),
								],
							}),
							vueranaCode,
						][this.step-1],
					],
				}),
			],
		})
	}
}

module.exports = { VueranaSlideComponent }
