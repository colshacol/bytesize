import * as React from 'react'
import { Observer } from 'mobx-react'

import './styles.css'

export const component = self => () => {
	return (
		<div styleName="$NAME">
			<p>I am $NAME</p>
		</div>
	)
}
