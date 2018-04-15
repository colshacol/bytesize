import * as React from 'react'
import Markdown from 'react-markdown'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'

import { TagBox } from './TagBox'
import { MOCK_TAGS, MOCK_SOURCE } from './consts'
import LightBulb from '#assets/svgs/light-0.svg'
import DarkBulb from '#assets/svgs/light-1.svg'
import { CodeRenderer } from './CodeRenderer'
import { LessonEditor } from './LessonEditor'
import { StateInjector } from '#utilities/StateInjector'

import './InstructionPanel.css'

const LightBulbIcon = props => {
	return props.theme === 'light' ? (
		<DarkBulb onClick={props.toggleTheme} styleName="darkBulb" />
	) : (
		<LightBulb onClick={props.toggleTheme} styleName="lightBulb" />
	)
}

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
							<When condition={false}>
								<Markdown
									source={state.contents}
									styleName="markdown"
									renderers={{
										code: CodeRenderer
									}}
								/>
							</When>
							<Otherwise>
								<LessonEditor lesson={state.lesson} />
								<div styleName="lessonEditorControls">
									<i className="fas fa-ban fa-lg" />
									<i className="fas fa-eye fa-lg" />
									<i className="fas fa-save fa-lg" />
								</div>
							</Otherwise>
						</Choose>
					)}
				</StateInjector>
			</div>
		)
	}
}
