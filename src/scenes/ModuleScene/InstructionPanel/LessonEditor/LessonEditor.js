import * as React from 'react'
import { createComponent } from '#utilities/createComponent'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import { inject, observer } from 'mobx-react'
import { EditorState } from 'draft-js'
import { CodeRenderer } from '../CodeRenderer'
import Markdown from 'react-markdown'

import './LessonEditor.css'

// NOTE: Experimental alternative React API I came up with.
// NOTE: I really like this API......
export const LessonEditor = createComponent((self) => {
	const { props } = self
	const { lesson } = props

	const converter = new Showdown.Converter({
		tables: true,
		simplifiedAutoLink: true
	})

	self.state = {
		editorState: {
			markdown: lesson.editedContent
		}
	}

	const onChange = (editorState) => {
		lesson.setContent(editorState)
		self.setState((state) => ({ editorState }))
	}

	const generator = (markdown) => {
		return Promise.resolve(converter.makeHtml(markdown))
	}

	const styleName = (props) => {
		return lesson.previewing ? 'previewing' : lesson.editing ? 'editing' : ''
	}

	return () => {
		return (
			<div styleName={`LessonEditor ${styleName(self.props)}`}>
				<Choose>
					<When condition={lesson.previewing}>
						<MD markdown={lesson.editedContent} />
					</When>
					<Otherwise>
						<ReactMde
							onChange={onChange}
							editorState={self.state.editorState}
							generateMarkdownPreview={generator}
						/>
					</Otherwise>
				</Choose>
				<div styleName="lessonEditorControls">
					<i className="fas fa-ban fa-lg" onClick={() => {}} />
					<span onClick={lesson.togglePreviewing}>
						<i className="fas fa-eye fa-lg" />
					</span>
					<span onClick={lesson.saveContent}>
						<i className="fas fa-save fa-lg" />
					</span>
				</div>
			</div>
		)
	}
})

class MD extends React.PureComponent {
	render() {
		return (
			<div styleName="lessonPreview">
				<Markdown
					source={this.props.markdown}
					renderers={{
						code: CodeRenderer
					}}
				/>
			</div>
		)
	}
}
