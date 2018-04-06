import * as React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'

import { Render } from './OutputPanel.render'

const stateTreeSelector = tree => {
	return {
		$editor: tree.state.editor
	}
}

@inject(stateTreeSelector)
@observer
export class Container extends React.Component {
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

	// componentDidUpdate(oldProps) {
	// 	// TODO: Add condition to maintain scroll position if the user
	// 	// has manually scrolled from the bottom.
	// 	prevProps.output.length < this.props.output.length &&
	// 		(this.scrollBox.current.scrollTop = 9999)
	// }

	run = event => {
		this.props.$editor.output.addInfoLog(`$ executing @ ${moment().format('h:mm:ss')}`)
		this.socket.send(JSON.stringify({ code: this.props.$editor.contents }))
	}

	scrollController = ({ stayScrolled, scrollBottom }) => {
		this.stayScrolled = stayScrolled
		this.scrollBottom = scrollBottom
	}

	render = () => Render(this)
}
