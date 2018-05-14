import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Link, Switch } from 'react-router-dom'
import { observable, action } from 'mobx'
import { select, user, editor } from '#state/selectors'
import './ModulesView.css'

const Module = (props) => {
  return (
    <div>
      <Link to={`/modules/${props.userName}/${props.module.uid}`}>
        <h3>{props.module.title}</h3>
      </Link>
    </div>
  )
}

@observer
export class ModulesView extends React.Component {
  @observable loading = true

  render() {
    console.log(
      'RENDERRRR',
      { props: this.props.user },
      this.props.user.userName
    )
    return (
      <div styleName="ModulesView">
        <h2 styleName="title">Modules</h2>
        <For each="module" of={this.props.user.modules}>
          <Module
            key={module.uid}
            userName={this.props.user.userName}
            module={module}
          />
        </For>
      </div>
    )
  }
}
