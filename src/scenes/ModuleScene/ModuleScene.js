import * as React from 'react'
import moment from 'moment'
import PanelGroup from 'react-panelgroup'

import { Editor } from '#features/Editor'
// import { OutputPanel } from './OutputPanel'
import { OutputTerminal as OutputPanel } from './OutputTerminal'

import { PANEL_SETTINGS, DEFAULT_EDITOR_CONTENTS } from './consts'
import './styles.css'

export class ModuleScene extends React.Component {
	storeEditor = editor => (this.editor = editor)

	render() {
		const self = this

		return (
			<div styleName="ModuleScene">
				{/* <InstructionPanel /> */}
				<div styleName="right">
					<PanelGroup direction="column" panelWidths={PANEL_SETTINGS}>
						<Editor storeEditor={self.storeEditor} />
						<OutputPanel />
					</PanelGroup>
				</div>
			</div>
		)
	}
}
