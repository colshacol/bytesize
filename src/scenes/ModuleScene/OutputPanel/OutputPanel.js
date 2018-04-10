import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { createSocket } from './socket'
import PlayButton from '#assets/svgs/play-0.svg'
import OptionsButton from '#assets/svgs/more-0.svg'
import { OutputBlock } from './OutputBlock'

import './OutputPanel.css'

import { ObjectRootLabel } from 'react-inspector'

export const OutputError = props => {
	return <ObjectRootLabel name={props.name} data={props.data} />
}

const stateTreeSelector = tree => {
	return {
		$editor: tree.state.editor,
		$output: tree.state.editor.output
	}
}

@inject(stateTreeSelector)
@observer
export class OutputPanel extends React.Component {
	componentWillMount() {
		this.props.$output.clearLogs()
		this.scrollBox = React.createRef()
		this.socket = createSocket(this)
	}

	componentWillUnmount() {
		this.props.$output.clearLogs()
		this.socket.close()
	}

	componentDidUpdate(oldProps) {
		// TODO: Add condition to maintain scroll position if the user
		// has manually scrolled from the bottom.
		this.scrollBox.current.scrollTop = 9999
	}

	render() {
		return (
			<div styleName="OutputPanel" ref={this.scrollBox} data-bytesize-output-panel>
				<OptionsButton styleName="optionsButton" />
				<PlayButton styleName="playButton" onClick={this.socket.execute} />
				<Choose>
					<When condition={!this.props.$output.logCount}>
						<OutputBlock
							log={{
								type: 'INFO',
								message: '# output will appear here',
								uid: '4y9fjuaeu3q9'
							}}
							key={'4y9fjuaeu3q9'}
						/>
					</When>
					<Otherwise>
						<For each="log" of={this.props.$output.logs} index="index">
							<OutputBlock log={log} key={log.uid} />
						</For>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}
