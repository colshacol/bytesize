import * as React from 'react'

import './TagBox.css'

const Tag = (props) => {
  return (
    <span styleName="Tag">
      <small>{props.name}</small>
    </span>
  )
}

export const TagBox = (props) => {
  return (
    <div styleName="TagBox">
      <For each="tag" of={props.tags} index="index">
        <Tag key={tag.name} name={tag.name} />
      </For>
    </div>
  )
}
