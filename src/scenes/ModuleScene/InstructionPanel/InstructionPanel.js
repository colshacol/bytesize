import * as React from 'react'
import Markdown from 'react-markdown'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'

import { OptionsMenu } from './OptionsMenu'
import { TagBox } from './TagBox'
import { MOCK_TAGS, MOCK_SOURCE } from './consts'
import LightBulb from '#assets/svgs/light-0.svg'
import DarkBulb from '#assets/svgs/light-1.svg'
import './InstructionPanel.css'
import { CodeRenderer } from './CodeRenderer'

const LightBulbIcon = props => {
	if (props.theme === 'light') {
		return <DarkBulb onClick={props.toggleMenu} styleName="darkBulb" />
	}

	return <LightBulb onClick={props.toggleMenu} styleName="lightBulb" />
}

const theme = 'light'

@observer
export class InstructionPanel extends React.Component {
	@observable theme = 'light'
	@observable menu = 'closed'

	@computed
	get isMenuOpen() {
		return this.menu === 'open'
	}

	@action
	toggleMenu = () => {
		this.menu = this.menu === 'open' ? 'closed' : 'open'
	}

	@action
	toggleTheme = () => {
		this.theme = this.theme === 'open' ? 'closed' : 'open'
	}

	render() {
		return (
			<div
				styleName={`InstructionPanel ${this.theme}`}
				className={`bytesize-${this.theme}-theme`}
			>
				<OptionsMenu open={this.isMenuOpen} />
				<LightBulbIcon theme={this.theme} toggleMenu={this.toggleTheme} />
				<section styleName="top">
					<h1>Introduction to promises.</h1>
					<TagBox tags={MOCK_TAGS} />
				</section>
				<section styleName="body">
					<Markdown
						source={this.props.source}
						styleName="markdown"
						renderers={{
							code: CodeRenderer
						}}
					/>
				</section>
			</div>
		)
	}
}
