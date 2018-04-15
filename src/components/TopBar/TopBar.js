import * as React from 'react'
import { action, computed } from 'mobx'

import { createComponent } from '#utilities/createComponent'
import { lastInArray as last } from '#utilities/lastInArray'

import './TopBar.css'

export const TopBar = createComponent(self => {
	const data = self.reactiveData({
		title: 'bytesize'
	})

	const _data = {
		toggleCount: 0
	}

	const toggleTitle = self.action(self => {
		data.title = last(data.title) === 'd' ? 'bytesize' : 'bytesized'
		_data.toggleCount++
	})

	return () => (
		<div styleName="TopBar">
			<div styleName="inner">
				<div onClick={toggleTitle} styleName="left" data-white-theme>
					<p styleName="logo">{data.title}</p>
				</div>
				<div styleName="right" data-dark-theme>
					<p>...</p>
				</div>
			</div>
		</div>
	)
})
