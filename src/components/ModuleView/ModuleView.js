import * as React from 'react'

import './ModuleView.css'
import { Editor } from '#components/Editor'
import Markdown from 'react-markdown-renderer'
import shards from '#stores'

const _Editor = shards.receiver('editorStore')((props) => {
  console.warn('----_Editor', { props })
  return (
    <Editor
      onChange={props.stores.editorStore.setContent}
      content={props.stores.editorStore.content}
    />
  )
})

export class ModuleView extends React.Component {
  onEditorChange = (value) => {}
  render() {
    return (
      <div styleName="ModuleView">
        <div data-light-theme styleName="left">
          <Markdown markdown="# Yolo" />
        </div>
        <div styleName="right">
          <_Editor />
        </div>
      </div>
    )
  }
}
