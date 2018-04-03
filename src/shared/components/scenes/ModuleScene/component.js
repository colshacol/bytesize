import * as React from 'react'
import { Observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import PanelGroup from 'react-panelgroup'

import { InstructionPanel } from './components/InstructionPanel'
import { EditorPanel } from './components/EditorPanel'
import { OutputPanel } from './components/OutputPanel'
import { PANEL_SETTINGS } from './consts'

import './ModuleScene.css'

export const component = self => props => {
	return (
		<div styleName="ModuleScene">
			<InstructionPanel />
			<div styleName="right">
				<PanelGroup direction="column" panelWidths={PANEL_SETTINGS}>
					<EditorPanel onChange={self.onChange} run={self.run} />
					<OutputPanel run={self.run} output={self.state.output} />
				</PanelGroup>
			</div>
		</div>
	)
}
