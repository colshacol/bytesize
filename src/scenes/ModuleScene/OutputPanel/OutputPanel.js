import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { createSocket } from './socket'
import PlayButton from '#assets/svgs/play-0.svg'
import MagicWand from '#assets/svgs/magic-0.svg'
import OptionsButton from '#assets/svgs/more-0.svg'
import { OutputBlock } from './OutputBlock'
import { ControlPanel } from './ControlPanel'

import './OutputPanel.css'

import { ObjectRootLabel } from 'react-inspector'

export const OutputError = (props) => {
	return <ObjectRootLabel name={props.name} data={props.data} />
}

const stateTreeSelector = (tree) => {
	return {
		$editor: tree.state.editor,
		$output: tree.state.output
	}
}

@inject(stateTreeSelector)
@observer
export class OutputPanel extends React.Component {
	$output = this.props.$output

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
			<div styleName="OutputPanel" data-bytesize-output-panel>
				<ControlPanel
					format={this.props.format}
					execute={this.socket.execute}
					clear={this.$output.clearLogs}
				/>
				<div styleName="output" ref={this.scrollBox}>
					<Choose>
						<When condition={!this.$output.logCount}>
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
							<For each="log" of={this.$output.logs} index="index">
								<OutputBlock log={log} key={log.uid} />
							</For>
						</Otherwise>
					</Choose>
				</div>
			</div>
		)
	}
}
