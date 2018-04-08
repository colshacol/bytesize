import * as React from 'react'

import './TopBar.styles.css'

export const Render = props => {
	return (
		<div styleName="TopBar">
			<div styleName="inner">
				<div styleName="left">
					<p>bytesize</p>
				</div>
				<div styleName="right">
					<p>...</p>
				</div>
			</div>
		</div>
	)
}
