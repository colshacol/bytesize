import * as React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import StayScrolled from 'react-stay-scrolled'
import Inspector from 'react-inspector'

import PlayButton from '#assets/svgs/play-0.svg'
import OptionsButton from '#assets/svgs/more-0.svg'
import { theme } from './theme'
import './styles.css'

const parseMessage = log => {
	if (['boolean', 'number', 'null', 'object', 'array'].includes(log.dataType)) {
		console.log(log.message)
		return JSON.parse(log.message)
	} else {
		return log.message
	}
}

const stateTreeSelector = tree => {
	return {
		$editor: tree.state.editor
	}
}

@inject(stateTreeSelector)
@observer
export class OutputPanel extends React.Component {
	componentWillMount() {
		this.scrollBox = React.createRef()
		this.socket = new WebSocket('ws://localhost:8765/run')

		this.socket.addEventListener('open', event => {
			console.log('ws: connected')
		})

		this.socket.addEventListener('message', event => {
			const data = JSON.parse(event.data)
			this.props.$editor.output.addLog(data)
		})
	}

	componentWillUnmount() {
		this.socket.close()
	}

	componentDidUpdate(oldProps) {
		// TODO: Add condition to maintain scroll position if the user
		// has manually scrolled from the bottom.
		this.scrollBox.current.scrollTop = 9999
	}

	execute = event => {
		// TODO: output.addExecutionLog
		this.props.$editor.output.addInfoLog(`$ executing @ ${moment().format('h:mm:ss')}`)
		this.socket.send(JSON.stringify({ code: this.props.$editor.contents }))
	}

	scrollController = ({ stayScrolled, scrollBottom }) => {
		this.stayScrolled = stayScrolled
		this.scrollBottom = scrollBottom
	}

	render() {
		return (
			<div styleName="OutputPanel" ref={this.scrollBox} data-bytesize-output-panel>
				<OptionsButton styleName="optionsButton" />
				<PlayButton styleName="playButton" onClick={this.execute} />
				<Choose>
					<When condition={!this.props.$editor.output.logCount}>
						<p styleName="pre-text">Output will be chillin' here.</p>
					</When>
					<Otherwise>
						<For each="log" of={this.props.$editor.output.logs} index="index">
							<Choose>
								<When condition={log.logType === 'INFO'}>
									<p key={log.uid} styleName="builtIn-log">
										{log.message}
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
