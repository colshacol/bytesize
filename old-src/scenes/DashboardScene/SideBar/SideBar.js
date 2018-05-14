import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'

import { Selection } from './Selection'
import ListIcon from '#assets/svgs/list-0.svg'
import SocialIcon from '#assets/svgs/social-0.svg'
import SettingsIcon from '#assets/svgs/settings-0.svg'
import './SideBar.css'

export const SideBar = (props) => {
  return (
    <div styleName="sideBar">
      <h1>Dashboard</h1>
      <Selection
        icon={ListIcon}
        setView={props.setView}
        routeTo={'modules'}
        title="Your Modules"
        info="View, edit, and review your modules."
      />
      <Selection
        icon={SocialIcon}
        setView={props.setView}
        routeTo={'community'}
        title="Your Circle"
        info="See what others in your community are doing."
      />
      <Selection
        icon={SettingsIcon}
        setView={props.setView}
        routeTo={'settings'}
        title="Your Settings"
        info="I promise we don't sell your shit like Zuck."
      />
    </div>
  )
}
