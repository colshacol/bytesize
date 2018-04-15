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
import './InstructionPanel.css'

const LightBulbIcon = props => {
	return props.theme === 'light' ? (
		<DarkBulb onClick={props.toggleTheme} styleName="darkBulb" />
	) : (
		<LightBulb onClick={props.toggleTheme} styleName="lightBulb" />
	)
}

@observer
export class InstructionPanel extends React.Component {
	render() {
		return (
			<div
				styleName={`InstructionPanel light`}
				className={`bytesize-light-theme`}
			>
				<section styleName="top">
					<h1>Introduction to promises.</h1>
					<TagBox tags={MOCK_TAGS} />
				</section>
				<section styleName="body">
					<Choose>
						<When condition={this.editing}>
							<Markdown
								source={this.props.source}
								styleName="markdown"
								renderers={{
									code: CodeRenderer
								}}
							/>
						</When>
						<Otherwise>
							<LessonEditor />
						</Otherwise>
					</Choose>
				</section>
			</div>
		)
	}
}
