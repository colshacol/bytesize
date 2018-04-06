// import React from 'react';

// const lifecycles = new Map([
// 	['willMount', 'componentWillMount'],
// 	['didMount', 'componentDidMount'],
// 	['willReceiveProps', 'componentWillReceiveProps'],
// 	['willUnmount', 'componentWillUnmount'],
// 	['shouldUpdate', 'shouldComponentUpdate'],
// 	['willUpdate', 'componentWillUpdate'],
// 	['didUpdate', 'componentDidUpdate'],
// 	['didCatch', 'componentDidCatch'],
// ])

// const checkLifecycleMethods = (props) => {
// 	return Object.keys(props).some(prop => {
// 		return lifecycles.has(prop)
// 	})
// }

// const actualLifecycleName = (name) => {
// 	return lifecycles.get(name) || name
// }

// const handleLifecycle = (name) => (handler) => {
// 	const _name = lifecycles.get(name)
// 	_name &&
// }

// const indicatesClass = (state, props) => {
// 	return (
// 		Object.keys(state).length ||
// 		Object.keys(props).filter(key => !(key in ['render', 'children']))
// 	)
// }

// export default ({ state, ...props }) => {
// 	const stateful = indicatesClass(state, props)

// 	if (state || ) {
// 		class Component extends React.Component {
// 			constructor({ state, ...props }) {
// 				super(props)

// 				const self = this
// 				self.state = state

// 				Object.entries(props).forEach([prop, value] => {
// 					typeof value === 'function' && (self[name] = value(self))
// 				})

// 			}
// 			state = this.props.initialState;
// 			_setState = (...args) => this.setState(...args);
// 			_forceUpdate = (...args) => this.forceUpdate(...args);

// 			getArgs() {
// 				const {state, props, _setState: setState, _forceUpdate: forceUpdate} = this;
// 				return {
// 					state,
// 					props,
// 					setState,
// 					forceUpdate,
// 				};
// 			}

// 			componentDidMount() {
// 				if (this.props.didMount) this.props.didMount(this.getArgs());
// 			}

// 			shouldComponentUpdate(nextProps, nextState) {
// 				if (this.props.shouldUpdate)
// 					return this.props.shouldUpdate({
// 						props: this.props,
// 						state: this.state,
// 						nextProps,
// 						nextState,
// 					});
// 				else return true;
// 			}

// 			componentWillUnmount() {
// 				if (this.props.willUnmount)
// 					this.props.willUnmount({
// 						state: this.state,
// 						props: this.props,
// 					});
// 			}

// 			componentDidUpdate(prevProps, prevState) {
// 				if (this.props.didUpdate)
// 					this.props.didUpdate(
// 						Object.assign(this.getArgs(), {
// 							prevProps,
// 							prevState,
// 						}),
// 					);
// 			}

// 			render() {
// 				const {children, render} = this.props;
// 				return children
// 					? typeof children === 'function' ? children(this.getArgs()) : children
// 					: render ? render(this.getArgs()) : null;
// 			}
// 		}
// 	}
// }

// export default Component;
