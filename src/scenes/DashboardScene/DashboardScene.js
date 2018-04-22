import * as React from 'react'
import { Link } from 'react-router-dom'

import { SideBar } from '#components/SideBar'
import { ContentSection } from '#components/ContentSection'
import './DashboardScene.css'

export class DashboardScene extends React.Component {
	render() {
		return (
			<main styleName="DashboardScene">
				<SideBar>
					<p>logged in</p>
				</SideBar>
				<ContentSection>
					<p>hehehehe</p>
				</ContentSection>
			</main>
		)
	}
}
