import * as React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import StayScrolled from 'react-stay-scrolled'
import Inspector from 'react-inspector'

import { theme } from './theme'
import './styles.css'

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

			if (data.stdout) {
				this.props.$editor.output.addLog(data.stdout)
			}
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
			<div styleName="OutputPanel" ref={this.scrollBox}>
				<Choose>
					<When condition={!this.props.$editor.output.logCount}>
						<p styleName="pre-text">Output will be chillin' here.</p>
					</When>
					<Otherwise>
						<For each="log" of={this.props.$editor.output.logs} index="index">
							<Choose>
								<When condition={log.type === 'INFO'}>
									<p key={log.uid} styleName="builtIn-log">
										{log.value}
									</p>
								</When>
								<Otherwise>
									<Inspector key={log.uid} theme={theme} data={log.value} />
								</Otherwise>
							</Choose>
						</For>
					</Otherwise>
				</Choose>
				<button styleName="runButton" onClick={this.execute}>
					Run Code
				</button>
			</div>
		)
	}
}
