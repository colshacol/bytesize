import regeneratorRuntime from 'regenerator-runtime'
import * as React from 'react'
import PanelGroup from 'react-panelgroup'
import { inject, observer } from 'mobx-react'
import MarkdownInput from '@opuscapita/react-markdown'

import { Editor } from '#features/Editor'
import { InstructionPanel } from './InstructionPanel'
import { OutputPanel } from './OutputPanel'
import { gorgeous } from '#utilities/gorgeous'

import { PANEL_SETTINGS, ROW_PANEL_SETTINGS } from './consts'
import './ModuleScene.css'

const stateTreeSelector = tree => {
	return {
		$stateTree: tree.state,
		$editor: tree.state.editor
	}
}

@inject(stateTreeSelector)
@observer
export class ModuleScene extends React.Component {
	componentWillMount() {
		// console.log(this.props)
		this.props.$stateTree.fetchModule(
			this.props.match.params.userName,
			this.props.match.params.id
		)
	}

	formatCode = async () => {
		const prettyCode = await gorgeous(this.props.$editor.contents)
		this.props.$editor.setContents(prettyCode)
	}

	render() {
		return (
			<div styleName="ModuleScene">
				<div styleName="body">
					<PanelGroup
						direction="row"
						borderColor={'transparent'}
						panelWidths={ROW_PANEL_SETTINGS}
					>
						<InstructionPanel source={this.props.$editor.instructions} />
						<div className="ModuleScene-rightPanelGroup">
							<PanelGroup
								direction="column"
								borderColor={'transparent'}
								panelWidths={PANEL_SETTINGS}
							>
								<Editor
									contents={this.props.$editor.contents}
									undo={this.props.$editor.undoSetContents}
									onChange={(editor, data, contents) => {
										this.props.$editor.setContents(contents)
									}}
								/>
								<OutputPanel ref={this.OutputPanel} format={this.formatCode} />
							</PanelGroup>
						</div>
					</PanelGroup>
				</div>
			</div>
		)
	}
}
