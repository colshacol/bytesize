import * as React from 'react'
import { action, computed } from 'mobx'
import { Link } from 'react-router-dom'

import { component } from '#utilities/createComponent'
import { lastInArray as last } from '#utilities/lastInArray'

import './TopBar.css'

export const TopBar = component((self) => {
	return (instance) => (
		<div styleName="TopBar">
			<div styleName="inner">
				<div styleName="left" data-white-theme>
					<Link to="/">
						<p styleName="logo">bytesized</p>
					</Link>
				</div>
				<div styleName="right" data-dark-theme>
					<p>...</p>
				</div>
			</div>
		</div>
	)
})
