import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Link, Switch } from 'react-router-dom'
import { observable, action } from 'mobx'
import { select, user, editor } from '#state/selectors'

import './CommunityView.css'

export class CommunityView extends React.Component {
	render() {
		return (
			<div styleName="CommunityView">
				<p>CommunityView</p>
			</div>
		)
	}
}
