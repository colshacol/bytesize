import * as React from 'react'
import Markdown from 'react-markdown'

import { TagBox } from './TagBox'
import { MOCK_TAGS, MOCK_SOURCE } from './consts'
import './InstructionPanel.css'

export const InstructionPanel = props => {
	return (
		<div styleName="InstructionPanel">
			<section styleName="top">
				<h1>Introduction to promises.</h1>
				<TagBox tags={MOCK_TAGS} />
			</section>
			<section styleName="body">
				<Markdown source={MOCK_SOURCE} styleName="markdown" />
			</section>
		</div>
	)
}
