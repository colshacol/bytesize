import * as React from 'react'
import Markdown from 'react-markdown'
import { observer, inject } from 'mobx-react'
import { observable, action, computed } from 'mobx'

import { CodeRenderer } from './CodeRenderer'
import { LessonEditor } from './LessonEditor'
import { StateInjector } from '#utilities/StateInjector'

import './InstructionPanel.css'

const stateSelector = (tree) => {
	return {
		$lesson: tree.state.lesson
	}
}

@inject(stateSelector)
@observer
export class InstructionPanel extends React.Component {
	render() {
		console.log('---', this.props.$lesson.content)
		return (
			<div
				styleName={`InstructionPanel light`}
				className={`bytesize-light-theme`}
			>
				<Choose>
					<When condition={!this.props.$lesson.editing}>
						<Markdown
							source={this.props.$lesson.content}
							styleName="markdown"
							renderers={{
								code: CodeRenderer
							}}
						/>
					</When>
					<Otherwise>
						<LessonEditor lesson={this.props.$lesson} />
					</Otherwise>
				</Choose>
			</div>
		)
	}
}
