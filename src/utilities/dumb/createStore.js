// import { store } from 'react-easy-state'

// const DEFAULT_ACTIONS_FN = (state) => ({})
// const DEFAULT_GETTERS_FN = (state) => ({})

// export const createStore = ({ actions = DEFAULT_ACTIONS_FN, getters = DEFAULT_GETTERS_FN, ...properties }) => {
// 	const state = store(properties)

// 	const _state = {
// 		state,
// 		actions: actions(state),
// 		getters: getters(state)
// 	}

// 	const stateKeys = Object.keys(_state.state)
// 	const actionsKeys = Object.keys(_state.actions)
// 	const gettersKeys = Object.keys(_state.getters)

// 	return new Proxy(state, {
// 		get(target, property) {
// 			if (property) {
// 				return (
// 					stateKeys.includes(property) && target.state[property] ||
// 					actionsKeys.includes(property) && target.actions[property] ||
// 					gettersKeys.includes(property) && target.getters[property] ||
// 				)
// 			}
// 		}
// 	})
// }
