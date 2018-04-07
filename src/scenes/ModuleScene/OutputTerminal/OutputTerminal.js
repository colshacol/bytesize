import * as React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import StayScrolled from 'react-stay-scrolled'
import { Controlled as CodeMirror } from 'react-codemirror2'

import { EDITOR_OPTIONS } from './consts'
import { theme } from './theme'
import './styles.css'

const stateTreeSelector = tree => {
	const $editor = tree.state.editor

	return {
		$editor,
		$output: $editor.output
	}
}

@inject(stateTreeSelector)
@observer
export class OutputTerminal extends React.Component {
	componentWillMount() {
		this.scrollBox = React.createRef()
		this.socket = new WebSocket('ws://localhost:8765/run')

		this.socket.addEventListener('open', event => {
			console.log('ws: connected')
		})

		this.socket.addEventListener('message', event => {
			const data = JSON.parse(event.data)

			if (data.stdout) {
				this.props.$output.addLog(data.stdout)
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
		console.log('yolo')
		this.props.$output.addInfoLog(`$ executing @ ${moment().format('h:mm:ss')}`)
		this.socket.send(JSON.stringify({ code: this.props.$editor.contents }))
	}

	scrollController = ({ stayScrolled, scrollBottom }) => {
		this.stayScrolled = stayScrolled
		this.scrollBottom = scrollBottom
	}

	render() {
		return (
			<div styleName="OutputTerminal" ref={this.scrollBox}>
				<CodeMirror
					value={this.props.$output.textValue}
					className="bytesize-CodeMirror-shell"
					options={EDITOR_OPTIONS}
					autoCursor
					autoFocus
				/>
				<button styleName="runButton" onClick={this.execute}>
					Run Code
				</button>
			</div>
		)
	}
}
