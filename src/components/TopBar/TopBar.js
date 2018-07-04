import * as React from 'react'
import { purist } from '#utilities/purist'
import { Link } from 'react-router-dom'

import './TopBar.css'

export class TopBar extends React.Component {
  render() {
    return (
      <div data-light-theme styleName="TopBar">
        <div styleName="container">
          <a href="/">
            <p styleName="logo">bytesized</p>
          </a>
        </div>
      </div>
    )
  }
}
