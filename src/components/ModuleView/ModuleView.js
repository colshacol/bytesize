import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Editor } from '#components/Editor'
import Markdown from 'react-markdown-renderer'
import SplitPane from 'react-split-pane'
import { getModule } from '#utilities/api/getModule'
import { Observer, inject, observer } from 'mobx-react'
import { Icon } from 'carbon-components-react'
import { Console, Hook, Decode } from 'console-feed'
import { LessonStore, CodeStore } from './store'

import './ModuleView.css'

const ICON_STYLE = {}

const saveIconClassName = (props) => {
  return props.isEditingLesson || props.isPreviewingLesson
    ? 'visible'
    : 'invisible'
}

const Logger = (props) => {
  console.log({ loggerLogs: props })
  return null
}

export class ModuleView extends React.Component {
  lessonStore = new LessonStore()
  codeStore = new CodeStore()

  componentWillMount() {
    localStorage.setItem('history.lastModulePath', window.location.pathname)
  }

  render() {
    console.log('code', this.codeStore)
    return (
      <Observer>
        {() => (
          <div styleName="ModuleView">
            <Logger stores={{ ...this.lessonStore, ...this.codeStore }} />
            <SplitPane split="vertical" defaultSize={400}>
              <div styleName="left" data-light-theme>
                <Choose>
                  <When condition={this.lessonStore.isEditingLesson}>
                    <Editor
                      onChange={this.lessonStore.setEditedLessonContent}
                      content={this.lessonStore.editedLessonContent}
                      theme="white"
                    />
                  </When>
                  <When condition={this.lessonStore.isPreviewingLesson}>
                    <div styleName="padded" data-lesson-rendered-md-container>
                      <Markdown
                        markdown={this.lessonStore.editedLessonContent}
                      />
                    </div>
                  </When>
                  <Otherwise>
                    <div styleName="padded" data-lesson-rendered-md-container>
                      <Markdown
                        markdown={this.lessonStore.originalLessonContent}
                      />
                    </div>
                  </Otherwise>
                </Choose>
                <div styleName="buttonBox">
                  <span
                    styleName="actionIcon"
                    onClick={this.codeStore.executeCodeInEditor}
                  >
                    <Icon name="icon--play" fill="white" styleName="icon" />
                  </span>
                  <span
                    styleName="actionIcon"
                    onClick={this.lessonStore.toggleEditingLesson}
                  >
                    <Icon name="icon--edit" fill="white" styleName="icon" />
                  </span>
                  <span
                    styleName={`actionIcon ${saveIconClassName(
                      this.lessonStore
                    )}`}
                    onClick={this.lessonStore.saveEditedLessonContent}
                  >
                    <Icon name="icon--save" fill="white" styleName="icon" />
                  </span>
                  <span
                    styleName={`actionIcon ${saveIconClassName(
                      this.lessonStore
                    )}`}
                    onClick={this.lessonStore.togglePreviewingLesson}
                  >
                    <Icon
                      name="icon--visibility-on"
                      fill="white"
                      styleName="icon"
                    />
                  </span>
                </div>
              </div>
              <div styleName="right">
                <SplitPane split="horizontal" defaultSize="60%">
                  <Editor
                    onChange={this.codeStore.setEditedCodeContent}
                    content={this.codeStore.editedCodeContent}
                    theme="oceanic"
                  />
                  <Terminal logs={this.codeStore.logs} />
                </SplitPane>
              </div>
            </SplitPane>
          </div>
        )}
      </Observer>
    )
  }
}

const Terminal = observer((props) => {
  return (
    <div styleName="Terminal">
      <Console
        logs={props.logs}
        variant="dark"
        style={{
          fontFamily: 'monospace',
          fontSize: '16px',
          lineHeight: '1.4'
        }}
      />
    </div>
  )
})
