import * as React from 'react'
import { Observer } from 'mobx-react'

import './ContentSection.css'

export const ContentSection = props => {
	return (
		<div styleName="ContentSection" data-dark-theme>
			{props.children}
		</div>
	)
}
