import * as React from 'react'
import { Observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import './styles.css'

export const component = self => () => {
	return (
		<div styleName="HomeScene">
			<p>I am HomeScene</p>
			<Link to="/testModule">Go to /testModule</Link>
		</div>
	)
}
