import * as React from 'react'

export const componentWillMount = self => () => {
	self.scrollBox = React.createRef()
}
