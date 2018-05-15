import * as React from 'react'

import './ModuleView.css'
import { Editor } from '#components/Editor'
import Markdown from 'react-markdown-renderer'
import shards from '#stores'
import SplitPane from 'react-split-pane'

const _Editor = shards.receiver('editorStore')((props) => {
  console.warn('----_Editor', { props })
  return (
    <Editor
      onChange={props.stores.editorStore.setContent}
      content={props.stores.editorStore.content}
      theme="shit"
    />
  )
})

const LessonEditor = shards.receiver('lessonStore')((props) => {
  return (
    <Editor
      onChange={props.stores.lessonStore.setContent}
      content={props.stores.lessonStore.content}
      theme="white"
    />
  )
})

@shards.receiver('lessonStore')
class Lesson extends React.Component {
  render() {
    const { props, state } = this
    const { stores } = props

    return (
      <div data-light-theme styleName="left">
        <button onClick={stores.lessonStore.toggleEditing}>
          toggle editing
        </button>
        <Choose>
          <When condition={stores.lessonStore.editing}>
            <LessonEditor />
          </When>
          <Otherwise>
            <div styleName="padded">
              <Markdown markdown={stores.lessonStore.content} />
            </div>
          </Otherwise>
        </Choose>
      </div>
    )
  }
}

export class ModuleView extends React.Component {
  onEditorChange = (value) => {}
  render() {
    return (
      <div styleName="ModuleView">
        <SplitPane split="vertical" defaultSize={200} primary="second">
          <Lesson />
          <div styleName="right">
            <_Editor />
          </div>
        </SplitPane>
      </div>
    )
  }
}
