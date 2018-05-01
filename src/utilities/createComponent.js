import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer, inject } from 'mobx-react'

const createComponent = (creator, props, context) => {
	const component = new React.Component(props)
	component.actions = {}
	component.data = {}
	let name = 'SHIT'

	component.deriveData = (fn) => {
		// If the props proxy is accessed in fn, then we need to derive data from
		// props on each prop-induced update. Otherwise, we do not!

		let propsAccess = false

		const props = new Proxy(component.props, {
			get(target, property) {
				propsAccess = true
				return Reflect.get(...arguments)
			}
		})

		component.data = observable(fn(component, props))

		if (propsAccess) {
			component.UNSAFE_componentWillReceiveProps = (newProps) => {
				Object.assign(component.data, fn(component, newProps))
			}
		}
	}

	component.setName = (name) => {
		name = name
		Object.defineProperty(component, 'displayName', {
			value: name
		})
	}

	component.addAction = (fn) => {
		component.actions[fn.name] = (...args) => {
			return fn(component, ...args)
		}
	}

	const comp = creator(component)
	component.render = () => comp(component)

	return component
}

export const component = (creator) => {
	const wrapper = inject('state')((props, context) => {
		return observer(createComponent(creator, props, context))
	})

	wrapper.displayName = 'CreatedComponent'
	return wrapper
}
