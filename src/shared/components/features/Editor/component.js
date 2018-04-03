import * as React from 'react'
import { Observer } from 'mobx-react'
import MonacoEditor from 'react-monaco-editor'

import { defineTheme } from './utilities/defineTheme'
import { OPTIONS } from './consts'

import './styles.css'

export const component = self => props => {
	return (
		<>
			<MonacoEditor
				width="100%"
				height="100%"
				language="typescript"
				theme="Poopy"
				options={OPTIONS}
				value={self.state.code}
				onChange={self.onChange}
				editorWillMount={defineTheme}
				editorDidMount={self.editorDidMount}
			/>
			<button styleName="runButton" onClick={self.run}>
				RUN CODE
			</button>
		</>
	)
}
