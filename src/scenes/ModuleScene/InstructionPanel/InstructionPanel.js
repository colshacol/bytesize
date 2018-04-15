import * as React from 'react'
import Markdown from 'react-markdown'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'

import { CodeRenderer } from './CodeRenderer'
import { LessonEditor } from './LessonEditor'
import { StateInjector } from '#utilities/StateInjector'

import './InstructionPanel.css'

const stateSelector = tree => {
	return {
		lesson: tree.state.lesson
	}
}

@observer
export class InstructionPanel extends React.Component {
	render() {
		return (
			<div
				styleName={`InstructionPanel light`}
				className={`bytesize-light-theme`}
			>
				<StateInjector selector={stateSelector}>
					{state => (
						<Choose>
							<When condition={!state.lesson.editing}>
								<Markdown
									source={state.lesson.contents}
									styleName="markdown"
									renderers={{
										code: CodeRenderer
									}}
								/>
							</When>
							<Otherwise>
								<LessonEditor lesson={state.lesson} />
							</Otherwise>
						</Choose>
					)}
				</StateInjector>
			</div>
		)
	}
}
