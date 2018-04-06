import * as React from 'react'
import { Observer } from 'mobx-react'
import Resizable from 're-resizable'
import StayScrolled from 'react-stay-scrolled'
import Inspector from 'react-inspector'

import { theme } from './theme'
import './OutputPanel.styles.css'

const isBuiltIn = log => {
	console.log({ log })
	return typeof log === 'object' && log.type === 'INFO'
}

export const Render = self => {
	console.log({ self })
	return (
		<div styleName="OutputPanel" ref={self.scrollBox}>
			<Choose>
				<When condition={!self.props.$editor.output.logCount}>
					<p styleName="pre-text">Output will be chillin' here.</p>
				</When>
				<Otherwise>
					<For each="log" of={self.props.$editor.output.logs} index="index">
						<Choose>
							<When condition={isBuiltIn(log)}>
								<p key={log.uid} styleName="builtIn-log">
									{log.value}
								</p>
							</When>
							<Otherwise>
								<Inspector key={log.uid} theme={theme} data={log.value} />
							</Otherwise>
						</Choose>
					</For>
				</Otherwise>
			</Choose>
			<button styleName="runButton" onClick={self.run}>
				Run Code
			</button>
		</div>
	)
}
