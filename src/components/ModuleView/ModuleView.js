import * as React from 'react'

import './ModuleView.css'
import { Editor } from '#components/Editor'
import Markdown from 'react-markdown-renderer'
import { ShardsReceiver } from '#stores/shards'

const _Editor = ShardsReceiver('editor')((props) => {
	return (
		<Editor onChange={props.store.setContent} content={props.store.content} />
	)
})

export class ModuleView extends React.Component {
	onEditorChange = (value) => {}
	render() {
		console.log('MV--', this.props)
		return (
			<div styleName="ModuleView">
				<div data-light-theme styleName="left">
					<Markdown markdown="# Yolo" />
				</div>
				<div styleName="right">
					<_Editor />
				</div>
			</div>
		)
	}
}
