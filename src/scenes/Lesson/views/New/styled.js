import styled, { css } from 'styled-components'
import { colors } from '#styles/colors'

const theme = css`
	background: #ffffff;
	color: ${colors.dark};
`

export const container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	> .left {
		${(props) => theme};
		height: 100%;
		width: 480px;
	}

	> .left > .top {
		display: flex;
		align-items: center;
		height: 54px;
		padding: 0 16px;
	}

	> .right {
	}
`
