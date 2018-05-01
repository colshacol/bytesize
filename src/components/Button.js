import * as React from 'react'
import styled, { css } from 'styled-components'

import { getColor, getOppositeColor, getBrightColor } from '#styles/colors'

const ghostMixin = css`
	background: transparent;
	border: 1px solid ${(props) => getColor(props.color)};
	color: ${(props) => getColor(props.color)};

	&:hover {
		background: ${(props) => getColor(props.color)};
		color: ${(props) => getOppositeColor(props.color)}
		border: 1px solid transparent;
	}
`

const normalMixin = css`
	background: ${(props) => getColor(props.color)};
	color: ${(props) => getOppositeColor(props.color)};

	&:hover {
		background: ${(props) => getBrightColor(props.color)};
		color: ${(props) => getOppositeColor(props.color)};
	}
`

const disabledMixin = css`
	/* TODO: Disabled styled. */
	cursor: not-allowed !important;
`

export const Button = styled.button`
	${(props) => (props.ghost ? ghostMixin : normalMixin)};
	${(props) => props.disabled && disabledMixin};
	cursor: pointer;
`
