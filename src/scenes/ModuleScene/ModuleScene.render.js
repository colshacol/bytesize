import * as React from 'react'
import { Observer, Provider, inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import PanelGroup from 'react-panelgroup'

import { Editor } from '#features/Editor'
import { OutputPanel } from './OutputPanel'
import { PANEL_SETTINGS, DEFAULT_EDITOR_CONTENTS } from './ModuleScene.consts'

import './ModuleScene.styles.css'

export const Render = self => {
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
