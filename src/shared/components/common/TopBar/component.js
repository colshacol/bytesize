import * as React from 'react'
import { Observer } from 'mobx-react'

import './TopBar.css'

export const component = self => () => {
	return (
		<div styleName="TopBar">
			<div styleName="left">
				<p>bytesize</p>
			</div>
			<div styleName="right">
				<p>...</p>
			</div>
		</div>
	)
}
