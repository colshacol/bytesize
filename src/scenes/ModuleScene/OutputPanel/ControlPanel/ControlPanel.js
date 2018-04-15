import * as React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'

import './ControlPanel.css'

const Control = props => {
	return (
		<div onClick={props.action} styleName="Control">
			<small>{props.title}</small>
		</div>
	)
}

export const ControlPanel = props => {
	return (
		<div styleName="ControlPanel">
			<Control title="Execute" action={props.execute} />
			<Control title="Format" action={props.format} />
			<Control title="Clear" action={props.clear} />
		</div>
	)
}
