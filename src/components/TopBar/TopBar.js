import * as React from 'react'
import { purist } from '#utilities/purist'
import { Link } from 'react-router-dom'

import './TopBar.css'

export class TopBar extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div data-light-theme styleName="TopBar">
        <div styleName="container">
          <Link to="/">
            <p styleName="logo">bytesized</p>
          </Link>
        </div>
      </div>
    )
  }
}
