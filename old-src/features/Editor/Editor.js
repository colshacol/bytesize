import * as React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { observer } from 'mobx-react'

import { EDITOR_OPTIONS } from './consts'
import './Editor.css'

type PropsT = {
  content: string,
  onChange(): void
}

export const Editor = (props: PropsT) => {
  return (
    <div styleName="Editor">
      <CodeMirror
        autoFocus
        autoCursor
        value={props.content}
        options={EDITOR_OPTIONS}
        className="bytesize-CodeMirror"
        onBeforeChange={props.onChange}
      />
    </div>
  )
}
