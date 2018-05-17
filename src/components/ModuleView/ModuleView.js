import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Editor } from '#components/Editor'
import Markdown from 'react-markdown-renderer'
import shards from '#stores'
import SplitPane from 'react-split-pane'
import { getModule } from '#utilities/api/getModule'
import './ModuleView.css'

const _Editor = shards.receiver('editorStore')((props) => {
  return (
    <Editor
      onChange={props.setContent}
      content={props.content}
      theme="shit"
    />
  )
})

const LessonEditor = shards.receiver('lessonStore')((props) => {
  return (
    <Editor
      onChange={props.setEditedContent}
      content={props.editedContent}
      theme="white"
    />
  )
})


class Lesson extends React.Component {
  render() {
    const { props, state } = this
    const { stores } = props

    return (
      <div data-light-theme styleName="left">
				<Choose>
					<When condition={props.editing}>
						<LessonEditor {...props} />
						<div styleName="buttonBox">
							<button
								styleName="actionButton"
								onClick={props.saveEditedContent}
							>
								save changes
							</button>
							<button
								styleName="actionButton"
								onClick={props.cancelEditedContent}
							>
								cancel changes
							</button>
						</div>
					</When>
					<Otherwise>
						<div styleName="padded" data-lesson-rendered-md-container>
							<Markdown markdown={props.content} />
						</div>
						<div styleName="buttonBox">
							<button
								styleName="actionButton"
								onClick={props.toggleEditing}
							>
								toggle editing
							</button>
						</div>
					</Otherwise>
				</Choose>
      </div>
    )
  }
}

@shards.receiver(['lessonStore', 'editorStore'])
@withRouter
export class ModuleView extends React.Component {
	isLoading = true

  async componentDidMount() {
    const module = await getModule(
      this.props.match.params.moduleId,
      this.props.match.params.userId
		)
		
		module.error && throw new Error(error)

		this.isLoading = false
		this.props.stores.lessonStore.inheritContent(module.data)
		this.props.stores.editorStore.inheritContent(module.data)
		
	}
	
  render() {
    return (
      <div styleName="ModuleView">
				<Choose>
					<When condition={this.isLoading}>
						<h3>Loading...</h3>
					</When>
					<Otherwise>
						<SplitPane split="vertical" defaultSize={400}>
							<Lesson {...this.props.stores.lessonStore} />
							<div styleName="right">
								<_Editor {...this.props.stores.editorStore} />
							</div>
						</SplitPane>
					</Otherwise>
				</Choose>
      </div>
    )
  }
}
