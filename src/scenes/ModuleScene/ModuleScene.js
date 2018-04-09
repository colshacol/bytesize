import * as React from 'react'
import PanelGroup from 'react-panelgroup'
import { inject, observer } from 'mobx-react'

import { Editor } from '#features/Editor'
import { InstructionPanel } from './InstructionPanel'
import { OutputPanel } from './OutputPanel'

import { PANEL_SETTINGS, ROW_PANEL_SETTINGS } from './consts'
import './styles.css'

const stateTreeSelector = tree => {
	console.log({ tree })
	return {
		$editor: tree.state.editor
	}
}

@inject(stateTreeSelector)
@observer
export class ModuleScene extends React.Component {
	render() {
		return (
			<div styleName="ModuleScene">
				<div styleName="body">
					<PanelGroup
						direction="row"
						borderColor={'#2a2a47'}
						panelWidths={ROW_PANEL_SETTINGS}
					>
						<InstructionPanel />
						<div className="ModuleScene-rightPanelGroup">
							<PanelGroup
								direction="column"
								borderColor={'#272a49'}
								panelWidths={PANEL_SETTINGS}
							>
								<Editor
									contents={this.props.$editor.contents}
									onChange={(editor, data, contents) => {
										this.props.$editor.setContents(contents)
									}}
								/>
								<OutputPanel ref={this.OutputPanel} />
							</PanelGroup>
						</div>
					</PanelGroup>
				</div>
			</div>
		)
	}
}
