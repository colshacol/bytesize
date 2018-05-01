import styled from 'styled-components'

export const container = styled('div')`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> [data-main] {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 350px;
		width: 100%;
		max-width: 800px;
	}
`

export const buttonBox = styled.div`
	display: flex;
	margin-top: 16px;

	> button {
		margin-right: 16px;
	}
`
