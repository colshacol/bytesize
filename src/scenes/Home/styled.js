import styled from 'styled-components'
import { gradients } from '#styles/colors'

export const container = styled('div')`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${gradients.darkLine};

	> .main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 350px;
		width: 100%;
		max-width: 800px;
	}

	> .main > .textBox {
		display: flex;
		flex-direction: column;
		margin-bottom: 32px;
	}

	> .main > .textBox > h1 {
		margin-right: 16px;
	}

	> .main > .textBox > p {
		margin-top: 2px;
	}
`

export const buttonBox = styled.div`
	display: flex;
	margin-top: 16px;

	> .button {
		margin-right: 12px;
	}
`
