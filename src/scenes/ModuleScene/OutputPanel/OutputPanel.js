import * as React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import StayScrolled from 'react-stay-scrolled'
import Inspector from 'react-inspector'

import { createSocket } from './socket'
import PlayButton from '#assets/svgs/play-0.svg'
import OptionsButton from '#assets/svgs/more-0.svg'
import { theme, errorTheme } from './theme'
import './OutputPanel.css'

const parseMessage = log => {
	console.log({ log })
	if (log.logType === 'ERROR') {
		console.log('ER(E(RE(R#(R(#R(#R(#(R#(R', JSON.parse(log.message))
		return JSON.parse(log.message).stack
	} else if (['boolean', 'number', 'null', 'object', 'array'].includes(log.dataType)) {
		console.log(log.message)
		return JSON.parse(log.message)
	} else {
		return log.message
	}
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
		this.scrollBox = React.createRef()
		this.socket = createSocket(this)
	}

	componentWillUnmount() {
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
						<p styleName="pre-text">Output will be chillin' here.</p>
					</When>
					<Otherwise>
						<For each="log" of={this.props.$output.logs} index="index">
							<Choose>
								<When condition={log.logType === 'INFO'}>
									<p key={log.uid} styleName="builtIn-log">
										{log.message}
									</p>
								</When>
								<When condition={log.logType === 'ERROR'}>
									{/* <Inspector expandLevel={0} sortObjectKeys key={log.uid} theme={errorTheme} data={parseMessage(log)} /> */}
									<p key={log.uid} styleName="logType-ERROR">
										{parseMessage(log)}
									</p>
								</When>
								<Otherwise>
									<Inspector key={log.uid} theme={theme} data={parseMessage(log)} />
								</Otherwise>
							</Choose>
						</For>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}
