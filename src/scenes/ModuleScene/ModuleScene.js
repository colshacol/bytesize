import * as React from 'react'
import PanelGroup from 'react-panelgroup'

import { Editor } from '#features/Editor'
import { InstructionPanel } from './InstructionPanel'
import { OutputPanel } from './OutputPanel'

import { PANEL_SETTINGS, ROW_PANEL_SETTINGS } from './consts'
import './styles.css'

export class ModuleScene extends React.Component {
	storeEditor = editor => (this.editor = editor)

	render() {
		const self = this

		return (
			<div styleName="ModuleScene">
				<div styleName="body">
					<PanelGroup direction="row" panelWidths={ROW_PANEL_SETTINGS}>
						<InstructionPanel />
						<div className="ModuleScene-rightPanelGroup">
							<PanelGroup
								direction="column"
								borderColor={'#b173eb'}
								panelWidths={PANEL_SETTINGS}
							>
								<Editor storeEditor={self.storeEditor} />
								<OutputPanel ref={this.OutputPanel} />
							</PanelGroup>
						</div>
					</PanelGroup>
				</div>
			</div>
		)
	}
}
