import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Link, Switch } from 'react-router-dom'
import { observable, action } from 'mobx'
import { select, user, editor } from '#state/selectors'

import './SettingsView.css'

export class SettingsView extends React.Component {
  render() {
    return (
      <div styleName="SettingsView">
        <p>SettingsView</p>
      </div>
    )
  }
}