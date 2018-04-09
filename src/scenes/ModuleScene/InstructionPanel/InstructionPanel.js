import * as React from 'react'
import Markdown from 'react-markdown'

import { OptionsMenu } from './OptionsMenu'
import { TagBox } from './TagBox'
import { MOCK_TAGS, MOCK_SOURCE } from './consts'
import LightBulb from '#assets/svgs/light-0.svg'
import DarkBulb from '#assets/svgs/light-1.svg'
import './InstructionPanel.css'
import { CodeRenderer } from './codeRenderer'

const LightBulbIcon = props => {
	if (props.theme === 'light') {
		return <DarkBulb onClick={props.toggleMenu} styleName="darkBulb" />
	}

	return <LightBulb onClick={props.toggleMenu} styleName="lightBulb" />
}

const theme = 'light'

export class InstructionPanel extends React.Component {
	state = {
		theme: 'light',
		menu: 'closed'
	}

	get isMenuOpen() {
		return this.state.menu === 'open'
	}

	toggleMenu = () => {
		this.setState({ menu: this.state.menu === 'open' ? 'closed' : 'open' })
	}

	toggleTheme = () => {
		this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })
	}

	render() {
		return (
			<div
				styleName={`InstructionPanel ${this.state.theme}`}
				className={`bytesize-${this.state.theme}-theme`}
			>
				<OptionsMenu open={this.isMenuOpen} />
				<LightBulbIcon theme={this.state.theme} toggleMenu={this.toggleTheme} />
				<section styleName="top">
					<h1>Introduction to promises.</h1>
					<TagBox tags={MOCK_TAGS} />
				</section>
				<section styleName="body">
					<Markdown
						source={MOCK_SOURCE}
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
