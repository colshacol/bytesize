import 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/search/match-highlighter.js'
import 'codemirror/addon/scroll/simplescrollbars.js'
import '#styles/potionsTheme/potionsTheme.css'

// FIX: match-highlighter
// FIX: simplescrollbars

export { Container as Editor } from './Editor.container'
