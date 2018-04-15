import * as React from 'react'
import { inject, observer } from 'mobx-react'

export class StateInjector extends React.Component {
	render() {
		const Injector = inject(this.props.selector)(observer(this.props.children))
		Injector.displayName = 'StateInjector'
		return <Injector {...this.props} />
	}
}
