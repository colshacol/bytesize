import React from 'react'
import isEqual from 'react-fast-compare'

// TODO: Make npm package.

export const purist = (Comp) => {
  Comp.displayName = 'WrappedPuristComponent'
  return class Purist extends React.Component {
    shouldComponentUpdate(nextProps) {
      const fin = !isEqual(this.props, nextProps)
      return fin
    }

    render() {
      return <Comp {...this.props} />
    }
  }
}

export class Purist extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps)
  }

  render() {
    return this.props.children(this.props)
  }
}
