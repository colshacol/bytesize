import * as React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { Observer } from 'mobx-react'
// import './Editor.styles.css'

type SelfT = {
	props: {}
}

export const EDITOR_OPTIONS = {
	autoCloseBrackets: true,
	cursorScrollMargin: 48,
	mode: 'javascript',
	theme: 'shit',
	lineNumbers: true,
	indentUnit: 2,
	tabSize: 2,
	styleActiveLine: true,
	readOnly: true
}

export const CodeRenderer = props => {
	return (
		<div>
			<CodeMirror
				value={props.value}
				className="bytesize-CodeMirror ofh"
				options={EDITOR_OPTIONS}
				autoCursor
				autoFocus
			/>
		</div>
	)
}
