import * as React from 'react'
import styled, { css } from 'styled-components'

const fontSize = (props) => {
	switch (props.size) {
		case 3:
			return '36px'
		case 2:
			return '24px'
		case 1:
			return '18px'
	}

	return '18px'
}

export const Logo = styled.p`
	font-family: 'Gotham HTF', sans-serif;
	font-size: ${fontSize};
	font-weight: 500;
`
