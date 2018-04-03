import * as React from 'react'
import { Observer } from 'mobx-react'

import './InstructionPanel.css'

export const component = self => () => {
	return (
		<div styleName="InstructionPanel">
			<p>I am InstructionPanel</p>
		</div>
	)
}
