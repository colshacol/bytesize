import styled from 'styled-components'

const shadows = [
	'0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
	'0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
]

export const colors = {
	light: '#ffffff',
	lightAccent: '#dddddd',
	brand: {
		bright: '#27de81',
		normal: '#41d68a'
	},
	green: {
		bright: '#27de81',
		normal: '#41d68a'
	},
	purple: {
		bright: '#716BFB',
		normal: '#716BFB'
	},
	darkAccent: '#465275',
	dark: '#212A42'
}

export const gradients = {
	darkLine: 'linear-gradient(0, #212A42 49%, #1d2435 49%)'
}

const colorsMap = Object.entries(colors).reduce((final, [name, value]) => {
	final[value] = name
	return final
}, {})

export const getBrightColor = (color) => {
	switch (color) {
		case 'light':
			return colors.light
		case 'dark':
			return colors.dark
	}
	console.log({ color })
	return colors[color].bright
}

export const getColor = (color) => {
	switch (color) {
		case 'light':
			return colors.light
		case 'dark':
			return colors.dark
	}
	console.log({ color })
	return colors[color].normal
}

export const getOppositeColor = (color) => {
	switch (color) {
		case 'light':
			return colors.dark
		case 'dark':
			return colors.white
	}
	console.log({ color })
	return colors.light
}
