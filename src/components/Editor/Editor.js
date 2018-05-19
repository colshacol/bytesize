import * as React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

import './Editor.css'

export const EDITOR_OPTIONS = (props) => ({
  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  mode: 'jsx',
  theme: props.theme,
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  styleActiveLine: true
})

export class Editor extends React.PureComponent {
  render() {
    console.log('fuck idk', { props: this.props })
    return (
      <div styleName="Editor">
        <CodeMirror
          value={this.props.content}
          options={EDITOR_OPTIONS(this.props)}
          onBeforeChange={(editor, data, value) => {
            this.props.onChange(value)
          }}
          onChange={(editor, data, value) => {
            // this.setState({ value })
          }}
        />
      </div>
    )
  }
}
