import * as React from 'react'

import { component } from '#utilities/createComponent'
import { Button } from '#components/Button'
import * as $ from './styled'

export const Lesson = component((self) => {
	return (instance) => {
		return (
			<$.container>
				<p>lesson here, bro</p>
			</$.container>
		)
	}
})
