import * as React from 'react'
import { createComponent } from '#utilities/createComponent'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'

import './LessonEditor.css'

export const LessonEditor = createComponent(self => {
	const data = self.reactiveData({
		contents: null
	})

	const setContents = self.action(contents => {
		console.log({ contents })
		data.contents = contents
	})

	const converter = new Showdown.Converter({
		tables: true,
		simplifiedAutoLink: true
	})

	return () => {
		return (
			<div styleName="LessonEditor">
				<ReactMde
					onChange={setContents}
					editorState={data.contents}
					generateMarkdownPreview={markdown =>
						Promise.resolve(converter.makeHtml(markdown))
					}
				/>
			</div>
		)
	}
})
