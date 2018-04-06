import * as React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { Observer } from 'mobx-react'

import { EDITOR_OPTIONS } from './Editor.consts'
import './Editor.styles.css'

type SelfT = {
	props: {}
}

export const Render = (self: SelfT) => {
	return (
		<div styleName="Editor">
			<CodeMirror
				editorDidMount={self.props.storeEditor}
				value={self.props.$editor.contents}
				className="bytesize-CodeMirror"
				options={EDITOR_OPTIONS}
				autoCursor
				autoFocus
				onBeforeChange={(editor, data, contents) => {
					self.props.$editor.setContents(contents)
				}}
			/>
			<h2>{self.props.$editor.characterCount}</h2>
		</div>
	)
}
