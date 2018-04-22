import * as React from 'react'
import PanelGroup from 'react-panelgroup'
import { inject, observer } from 'mobx-react'
import MarkdownInput from '@opuscapita/react-markdown'

import { prettier } from '#utilities/api/prettier'
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
		const { code, error } = await prettier(this.props.$editor.contents)
		this.props.$editor.setContents(code)
	}

	render() {
		return (
			<div styleName="ModuleScene">
				<InstructionPanel
					source={this.props.$editor.instructions}
					setInstructions={this.props.$editor.setInstructions}
				/>
				<div styleName="right">
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
			</div>
		)
	}
}
