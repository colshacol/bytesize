import * as React from 'react'

import './OptionsMenu.css'

const className = open => {
	return open ? 'open' : 'closed'
}

export const OptionsMenu = props => {
	return (
		<div styleName={`OptionsMenu ${className(props.open)}`}>
			<p>Toggle Dark Theme</p>
		</div>
	)
}
