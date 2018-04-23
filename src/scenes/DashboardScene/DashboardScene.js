import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Link, Switch } from 'react-router-dom'
import { observable, action } from 'mobx'
import { select, user, editor } from '#state/selectors'

import { SideBar as SideBarWrapper } from '#components/SideBar'
import { ContentSection } from '#components/ContentSection'
import { SideBar } from './SideBar'
import './DashboardScene.css'

@inject(select([user, editor]))
@observer
export class DashboardScene extends React.Component {
	@observable view = ''

	@action
	setView = which => {
		this.view = which
	}

	render() {
		return (
			<main styleName="DashboardScene">
				<SideBarWrapper>
					<SideBar setView={this.setView} />
				</SideBarWrapper>
				<ContentSection>
					<div styleName="sideBar">
						<Choose>
							<When condition={this.view.includes('modules')}>
								<p>modules</p>
							</When>
							<When condition={this.view.includes('community')}>
								<p>community</p>
							</When>
							<When condition={this.view.includes('settings')}>
								<p>settings</p>
							</When>
							<Otherwise>
								<p>modulessss</p>
							</Otherwise>
						</Choose>
					</div>
				</ContentSection>
			</main>
		)
	}
}
