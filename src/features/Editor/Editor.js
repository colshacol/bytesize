import * as React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { observer } from 'mobx-react'

import { EDITOR_OPTIONS } from './consts'
import './Editor.css'

export const Editor = props => {
	return (
		<div styleName="Editor">
			<CodeMirror
				value={props.contents}
				className="bytesize-CodeMirror"
				options={EDITOR_OPTIONS}
				autoCursor
				autoFocus
				onBeforeChange={props.onChange}
			/>
		</div>
	)
}
