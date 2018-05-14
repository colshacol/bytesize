import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer, inject } from 'mobx-react'

const withObservableData = component => {
	component.hasOwnProperty('$data') &&
		(component.$data = observable.box(component.$data))
	return component
}

export const createComponent = creator => {
	return inject('state')(props => {
		const component = new React.Component(props)

		Object.defineProperty(component, 'reactiveData', {
			enumerable: false,
			value: data => {
				component.data = observable(data)
				return component.data
			}
		})

		Object.defineProperty(component, 'action', {
			enumerable: false,
			value: func => {
				return action((...args) => func(...args))
			}
		})

		component.render = creator(component)
		return observer(component)
	})
}