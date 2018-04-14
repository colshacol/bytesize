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

		// Object.defineProperty(component, '', {
		// 	enumerable: false,
		// 	value: func => {
		// 		return action((...args) => func(...args))
		// 	}
		// })

		// component.setData = data => {
		// 	component.data = observable(data)
		// }

		component.render = creator(component)
		return observer(component)
	})
}

// export const createComponent = creator => {
// 	return props => {
// 		const component = new React.Component(props)
// 		// component.selectStores = (selector) => {

// 		// }
// 		const getComponent = () => {
// 			return component
// 		}

// 		const _component = new Proxy(getComponent, {
// 			set(target, property, value) {
// 				const _value = property === '$data' ? observable(value) : value
// 				component[property] = _value
// 				return true
// 			},
// 			get(target, property) {
// 				return component[property]
// 			}
// 			// apply(target, self, args) {
// 			// 	console.log('args...', args)
// 			// 	return target
// 			// }
// 		})

// 		const foo=  inject('state)(_component |> creator |> withObservableData |> getComponent |> observer
// 		console.log({ foo })
// 		console.log('........', _component())
// 		return foo
// 	}
// }
