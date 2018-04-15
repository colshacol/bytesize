import * as React from 'react'
import { createComponent } from '#utilities/createComponent'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import { inject, Observer } from 'mobx-react'
import { EditorState } from 'draft-js'

console.log({ ReactMde })
import './LessonEditor.css'

export const LessonEditor = createComponent(self => {
	const { props } = self
	const { lesson } = props

	const converter = new Showdown.Converter({
		tables: true,
		simplifiedAutoLink: true
	})

	self.state = { editorState: lesson.s() }

	self.onChange = editorState => {
		lesson.setContents(editorState)
		self.setState(state => ({
			editorState
		}))
	}

	return () => (
		<div
			styleName={`LessonEditor ${(lesson.editing ? 'editing' : '') ||
				(lesson.previewing ? 'previewing' : '')}`}
		>
			<ReactMde
				onChange={self.onChange}
				editorState={self.state.editorState}
				generateMarkdownPreview={markdown => {
					console.log({ markdown })
					return Promise.resolve(converter.makeHtml(markdown))
				}}
			/>
		</div>
	)
})
