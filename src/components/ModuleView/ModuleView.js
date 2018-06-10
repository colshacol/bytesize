import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Editor } from '#components/Editor'
import Markdown from 'react-markdown-renderer'
import SplitPane from 'react-split-pane'
import { getModule } from '#utilities/api/getModule'
import { observer, inject } from 'mobx-react'
import Ionicon from 'react-ionicons'
import './ModuleView.css'

const CodeEditor = observer((props) => {
  return (
    <div styleName="right">
      <Editor
        onChange={props.setContent}
        content={props.content}
        theme="oceanic"
      />
    </div>
  )
})

const LessonEditor = observer((props) => {
  return (
    <Editor onChange={props.setContent} content={props.content} theme="white" />
  )
})

@observer
class Lesson extends React.Component {
  render() {
    const { props, state } = this
    console.log({ props })

    return (
      <div styleName="left">
        <Choose>
          <When condition={props.moduleStore.isEditingLesson}>
            <LessonEditor
              content={props.moduleStore.activeModule.editedLessonContent}
              setContent={props.moduleStore.setEditedLessonContent}
            />
            <LessonEditorActions
              save={props.moduleStore.saveAndToggleLessonEditor}
              cancel={props.moduleStore.cancelAndToggleLessonEditor}
            />
          </When>
          <When condition={props.moduleStore.isViewingLesson}>
            <div styleName="padded" data-lesson-rendered-md-container>
              <Markdown
                markdown={props.moduleStore.activeModule.lessonContent}
              />
            </div>
            <LessonViewerActions
              toggleEditing={props.moduleStore.toggleLessonEditor}
            />
          </When>
        </Choose>
      </div>
    )
  }
}

const LessonViewerActions = (props) => {
  return (
    <div styleName="buttonBox">
      <span styleName="actionIcon" onClick={props.toggleEditing}>
        <Ionicon icon="md-play" font-size="32px" color="#fff" />
      </span>
      <span styleName="actionIcon">
        <Ionicon icon="md-create" font-size="32px" color="#fff" />
      </span>
      <span styleName="actionIcon">
        <Ionicon icon="md-information-circle" font-size="32px" color="#fff" />
      </span>
    </div>
  )
}

const LessonEditorActions = (props) => {
  return (
    <div styleName="buttonBox">
      <Ionicon icon="md-play" font-size="32px" color="#fff" />
      <button styleName="actionButton" onClick={props.save}>
        save
      </button>
      <button styleName="actionButton" onClick={props.cancel}>
        cancel
      </button>
    </div>
  )
}

const selector = (tree) => {
  return {
    moduleStore: tree.state.moduleStore
  }
}

@withRouter
@inject(selector)
@observer
export class ModuleView extends React.Component {
  render() {
    const { props } = this

    return (
      <div styleName="ModuleView">
        <Choose>
          <When condition={this.isLoading}>
            <h3>Loading...</h3>
          </When>
          <Otherwise>
            <SplitPane split="vertical" defaultSize={400}>
              <Lesson moduleStore={props.moduleStore} />
              <CodeEditor
                content={props.moduleStore.activeModule.editedCodeContent}
                setContent={props.moduleStore.setEditedCodeContent}
              />
            </SplitPane>
          </Otherwise>
        </Choose>
      </div>
    )
  }
}
