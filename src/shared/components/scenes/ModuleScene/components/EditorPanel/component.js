import * as React from 'react'
import { Observer } from 'mobx-react'
import Resizable from 're-resizable'

import { Editor } from '#components/features/Editor'
import './EditorPanel.css'

export const component = self => props => {
	return (
		<div styleName="EditorPanel">
			<Editor onChange={props.onChange} />
		</div>
	)
}
