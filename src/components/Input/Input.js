import * as React from 'react'

import './Input.css'

const getStyleName = (props) => {
  const styles = []

  props.rightButton && styles.push('withRightButton')
  props.big && styles.push('big')

  return styles.join(' ')
}

export const Input = (props) => {
  const styleName = getStyleName(props)

  return (
    <div
      data-input
      styleName={`Input ${styleName}`}
      className={props.className}
    >
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onMouseOut={props.onMouseOut}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        onKeyPress={props.onKeyPress}
        onKeyUp={props.onKeyUp}
      />
      <If condition={props.rightButton}>
        <button
          data-button
          styleName="createButton"
          onClick={props.rightButton.onClick}
        >
          {props.rightButton.text}
        </button>
      </If>
    </div>
  )
}
