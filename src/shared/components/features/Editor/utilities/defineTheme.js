const themeOptions = {
	base: 'vs-dark', // can also be vs-dark or hc-black
	inherit: false, // can also be false to completely replace the builtin rules
	rules: [
		{ token: '', foreground: 'FF80AB', background: '000000' },
		{ token: 'invalid', foreground: 'f44747' },
		{ token: 'emphasis', fontStyle: 'italic' },
		{ token: 'strong', fontStyle: 'bold' },

		{ token: 'variable', foreground: 'FF80AB' },
		{ token: 'variable.predefined', foreground: 'FF80AB' },
		{ token: 'variable.parameter', foreground: 'FF80AB' },
		{ token: 'constant', foreground: 'FF80AB' },
		{ token: 'comment', foreground: '8475AB' },
		{ token: 'number', foreground: 'CDDC39' },
		{ token: 'number.hex', foreground: 'CDDC39' },
		{ token: 'regexp', foreground: 'ff8c00' },
		{ token: 'annotation', foreground: 'FF80AB' },
		{ token: 'type', foreground: 'FF80AB' },
		{ token: 'identifier', foreground: 'eae5ee' },
		{ token: 'delimiter', foreground: '8C9EFF' },

		{ token: 'declaration', foreground: '1CECA7' },
		{ token: 'meta.tag', foreground: 'ff8c00' },
		{ token: 'metatag', foreground: 'FF80AB' },

		{ token: 'string', foreground: 'ff8c00' },
		{ token: 'parameter', foreground: '000000' },
		{ token: 'string.value', foreground: '000000' },

		{ token: 'attribute.name', foreground: 'FF80AB' },
		{ token: 'attribute.value', foreground: 'FF80AB' },
		{ token: 'attribute.value.number.css', foreground: 'ff8c00' },
		{ token: 'attribute.value.unit.css', foreground: 'ff8c00' },
		{ token: 'attribute.value.hex.css', foreground: 'ff8c00' },

		{ token: 'keyword.operator', foreground: 'FF80AB' },

		{ token: 'keyword', foreground: 'B083FF' },
		{ token: 'keyword.flow', foreground: 'C586C0' },
		{ token: 'keyword.json', foreground: 'CE9178' },
		{ token: 'keyword.flow.scss', foreground: '569CD6' },

		{ token: 'bracket', foreground: '000000' },
		{ token: 'operator.scss', foreground: '909090' },
		{ token: 'operator.sql', foreground: '778899' },
		{ token: 'operator.swift', foreground: '909090' },
		{ token: 'predefined.sql', foreground: 'FF00FF' }
	],
	colors: {
		foreground: '#ff8c00',
		focusBorder: '#ff8c00',
		'dropdown.background': '#383852',
		'list.inactiveFocusBackground': '#303052',
		'list.activeSelectionBackground': '#303070',
		'list.focusBackground': '#27232e',
		'list.focusAndSelectionBackground': '#383852',
		'list.inactiveSelectionBackground': '#303d45',
		'list.hoverBackground': '#005070',
		'list.dropBackground': '#505590',
		'button.background': '#5088a3',
		'button.hoverBackground': '#6099a3',
		'editor.background': '#1d1b21',
		'editor.foreground': '#fff5ee',
		'editor.selectionBackground': '#372546',
		'editor.lineHighlightBackground': '#372546',
		'editorCursor.foreground': '#ff8c00',
		'editor.whitespaces': '#383880',
		'editor.indentGuides': '#505037',
		'editorWhitespace.foreground': '#404f7d'
	}
}

export const defineTheme = () => monaco.editor.defineTheme('Poopy', themeOptions)

// export const defineTheme = monaco => {
// 	monaco.editor.defineTheme('Poopy', {
// 		base: 'vs-dark',
// 		inherit: true,
// 		"colors": {
// 			"editor.background": "#1a1d21",
// 			"editor.foreground": "#fff5ee",
// 			"editor.selectionBackground": "#6b6b6b",
// 			"editor.lineHighlightBackground": "#273a4f",
// 			"editorCursor.foreground": "#ff8c00",
// 			"editorWhitespace.foreground": "#404f7d"
// 		},
// 		colors: {
// 			foreground: '#ff8c00',
// 			focusBorder: '#00f9ff',
// 			'dropdown.background': '#383852',
// 			'list.inactiveFocusBackground': '#303052',
// 			'list.activeSelectionBackground': '#303070',
// 			'list.focusBackground': '#394770',
// 			'list.focusAndSelectionBackground': '#383852',
// 			'list.inactiveSelectionBackground': '#303d45',
// 			'list.hoverBackground': '#005070',
// 			'list.dropBackground': '#505590',
// 			'button.background': '#5088a3',
// 			'button.hoverBackground': '#6099a3',
// 			'editor.background': '#1a1d21',
// 			'editor.foreground': '#fff5ee',
// 			'editor.selectionBackground': '#6b6b6b',
// 			'editor.lineHighlightBackground': '#3e3d32',
// 			'editor.cursor': '#ff8c00',
// 			'editor.whitespaces': '#383880',
// 			'editor.indentGuides': '#505037'
// 		},
// 		rules: [
// 			{ token: '', foreground: 'fff5ee', background: '1a1d21' },
// 			{ token: 'invalid', foreground: 'f44747' },
// 			{ token: 'emphasis', fontStyle: 'italic' },
// 			{ token: 'strong', fontStyle: 'bold' },

// 			{ token: 'variable', foreground: 'FFFFFF' },
// 			{ token: 'variable.predefined', foreground: '4864AA' },
// 			{ token: 'variable.parameter', foreground: '9CDCFE' },
// 			{ token: 'constant', foreground: 'B083FF' },
// 			{ token: 'comment', foreground: '608B4E' },
// 			{ token: 'number', foreground: 'CDDC39' },
// 			{ token: 'number.hex', foreground: 'CDDC39' },
// 			{ token: 'regexp', foreground: 'B46695' },
// 			{ token: 'annotation', foreground: 'cc6666' },
// 			{ token: 'type', foreground: '3DC9B0' },

// 			{ token: 'delimiter', foreground: 'DCDCDC' },
// 			{ token: 'delimiter.html', foreground: '808080' },

// 			{ token: 'tag', foreground: '569CD6' },
// 			{ token: 'tag.id.jade', foreground: '4F76AC' },
// 			{ token: 'tag.class.jade', foreground: '4F76AC' },
// 			{ token: 'meta.scss', foreground: 'A79873' },
// 			{ token: 'meta.tag', foreground: 'CE9178' },
// 			{ token: 'metatag', foreground: 'DD6A6F' },
// 			{ token: 'metatag.content.html', foreground: '9CDCFE' },
// 			{ token: 'metatag.html', foreground: '569CD6' },

// 			{ token: 'key', foreground: '9CDCFE' },
// 			{ token: 'string.key.json', foreground: '9CDCFE' },
// 			{ token: 'string.value.json', foreground: 'CE9178' },

// 			{ token: 'attribute.name', foreground: '9CDCFE' },
// 			{ token: 'attribute.value', foreground: 'CE9178' },
// 			{ token: 'attribute.value.number.css', foreground: 'B5CEA8' },
// 			{ token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
// 			{ token: 'attribute.value.hex.css', foreground: 'D4D4D4' },

// 			{ token: 'string.js', foreground: 'FFCA00' },
// 			{ token: 'string.sql', foreground: 'FF0000' },

// 			{ token: 'keyword', foreground: '569CD6' },
// 			{ token: 'keyword.flow', foreground: 'C586C0' },
// 			{ token: 'keyword.json', foreground: 'CE9178' },
// 			{ token: 'keyword.flow.scss', foreground: '569CD6' },

// 			{ token: 'operator.scss', foreground: '909090' },
// 			{ token: 'operator.sql', foreground: '778899' },
// 			{ token: 'operator.swift', foreground: '909090' },
// 			{ token: 'predefined.sql', foreground: 'FF00FF' }
// 		]
// 	})
// }

// export default function defineTheme(monaco) {
// 	monaco.editor.defineTheme('Poopy', {
// 		base: 'vs',
// 		inherit: true,
// 		rules: [
// 			{ token: 'tag', foreground: '9C27B0' },
// 			{ token: 'attribute.name', foreground: '669900' },
// 			{ token: 'attribute.value', foreground: '4a4ae6' },

// 			{ token: 'string.key.json', foreground: '669900' },
// 			{ token: 'string.value.json', foreground: '4a4ae6' },

// 			{ token: 'metatag.content.html', foreground: '4a4ae6' },
// 			{ token: 'string.escape', foreground: '673ab7' },

// 			{ token: 'keyword', foreground: '4a4ae6' },
// 			{ token: 'string', foreground: '669900' },
// 			{ token: 'number', foreground: '9C27B0' }
// 		]
// 	})
// }
