import * as React from 'react'
import { Link } from 'react-router-dom'

import { component } from '#utilities/createComponent'
import { Button } from '#components/Button'
import * as $ from './styled'

export const New = component((self) => {
	self.setName('New')
	return (instance) => {
		console.log('New Mountinggg')
		return (
			<$.container>
				<p>newwwwww...</p>
			</$.container>
		)
	}
})
