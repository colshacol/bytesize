import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { Render } from './Editor.render'

const stateTreeSelector = tree => {
	return {
		$editor: tree.state.editor
	}
}

@inject(stateTreeSelector)
@observer
export class Container extends React.Component {
	render() {
		return Render(this)
	}
}
