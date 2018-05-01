import * as React from 'react'
import { Link } from 'react-router-dom'

import { component } from '#utilities/createComponent'
import { Button } from '#components/Button'
import { Logo } from '#components/Logo'
import * as $ from './styled'

import './styles.css'
import RichTextEditor from 'react-rte'

// TODO: Lesson on left, Editor on right.

const CUSTOM_BUTTON_CLASS = 'rte-editor-custom-button'
const toolbarConfig = {
	// Optionally specify the groups to display (displayed in the order listed).
	display: [
		'INLINE_STYLE_BUTTONS',
		'BLOCK_TYPE_BUTTONS',
		'LINK_BUTTONS',
		'BLOCK_TYPE_DROPDOWN',
		'HISTORY_BUTTONS'
	],
	INLINE_STYLE_BUTTONS: [
		{
			label: 'Bold',
			style: 'BOLD',
			className: CUSTOM_BUTTON_CLASS,
			activeClassName: 'fucker'
		},
		{ label: 'Italic', style: 'ITALIC', className: CUSTOM_BUTTON_CLASS },
		{ label: 'Underline', style: 'UNDERLINE', className: CUSTOM_BUTTON_CLASS },
		{ label: 'Monospace', style: 'CODE', className: CUSTOM_BUTTON_CLASS }
	],
	BLOCK_TYPE_DROPDOWN: [
		{ label: 'Normal', style: 'unstyled' },
		{ label: 'Heading Large', style: 'header-one' },
		{ label: 'Heading Medium', style: 'header-two' },
		{ label: 'Heading Small', style: 'header-three' }
	],
	BLOCK_TYPE_BUTTONS: [
		{ label: 'UL', style: 'unordered-list-item' },
		{ label: 'OL', style: 'ordered-list-item' }
	]
}

const styleMap = {
	STRIKETHROUGH: {
		textDecoration: 'line-through'
	},
	CODE: {
		padding: '8px',
		background: '#f2f2f2'
	}
}

const deriveData = (self, newProps) => {
	return {
		editorValue: RichTextEditor.createEmptyValue()
	}
}

const editorUpdate = (self, value) => {
	console.log({ value })
	self.data.editorValue = value
}

export const New = component((self) => {
	self.deriveData(deriveData)
	self.addAction(editorUpdate)

	return (instance) => {
		return (
			<$.container>
				<div className="left">
					<div className="top">
						<Logo size={1}>bytesized</Logo>
					</div>
					<RichTextEditor
						className="RTE"
						customStyleMap={styleMap}
						value={self.data.editorValue}
						onChange={self.actions.editorUpdate}
						toolbarConfig={toolbarConfig}
					/>
				</div>
				<div className="right" />
			</$.container>
		)
	}
})
