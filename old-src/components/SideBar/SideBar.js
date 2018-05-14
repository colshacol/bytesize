import * as React from 'react'
import { Observer } from 'mobx-react'

import './SideBar.css'

export const SideBar = (props) => {
  return <div styleName="SideBar">{props.children}</div>
}
