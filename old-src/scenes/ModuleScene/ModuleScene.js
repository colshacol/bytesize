import * as React from 'react'
import PanelGroup from 'react-panelgroup'
import { inject, observer } from 'mobx-react'
import MarkdownInput from '@opuscapita/react-markdown'

import { Editor } from '#features/Editor'
import { InstructionPanel } from './InstructionPanel'
import { OutputPanel } from './OutputPanel'

import { PANEL_SETTINGS, ROW_PANEL_SETTINGS } from './consts'
import './ModuleScene.css'

const selector = (tree) => {
  return {
    $main: tree.state,
    $editor: tree.state.editor
  }
}

@inject(selector)
@observer
export class ModuleScene extends React.Component {
  componentDidMount() {
    this.props.$main.activateModule(this.props.match.params)
  }

  render() {
    return (
      <div styleName="ModuleScene">
        <InstructionPanel
          source={this.props.$editor.instructions}
          setInstructions={this.props.$editor.setInstructions}
        />
        <div styleName="right">
          <PanelGroup
            direction="column"
            borderColor={'transparent'}
            panelWidths={PANEL_SETTINGS}
          >
            <Editor
              content={this.props.$editor.content}
              onChange={(editor, data, content) => {
                this.props.$editor.setContent(content)
              }}
            />
            <OutputPanel
              ref={this.OutputPanel}
              format={this.props.$editor.formatContent}
            />
          </PanelGroup>
        </div>
      </div>
    )
  }
}
