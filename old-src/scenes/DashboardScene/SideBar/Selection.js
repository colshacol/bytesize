import * as React from 'react'
import './Selection.css'

export const Selection = (props) => {
  return (
    <div onClick={() => props.setView(props.routeTo)} styleName="Item">
      <div styleName="Thing">
        <props.icon />
      </div>
      <div styleName="info">
        <h3>{props.title}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  )
}
