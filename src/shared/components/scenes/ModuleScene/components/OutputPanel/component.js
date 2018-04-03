import * as React from 'react'
import { Observer } from 'mobx-react'
import Resizable from 're-resizable'
import StayScrolled from 'react-stay-scrolled'
import Inspector from 'react-inspector'

import { theme } from './theme'
import './OutputPanel.css'

const isBuiltIn = log => {
	return typeof log === 'object' && log.type === 'BUILT_IN'
}

export const component = self => props => {
	console.log({ props })
	return (
		<div styleName="OutputPanel" ref={self.scrollBox}>
			<Choose>
				<When condition={!props.output.length}>
					<p styleName="pre-text">Output will be chillin' here.</p>
				</When>
				<Otherwise>
					<For each="log" of={props.output} index="index">
						<Choose>
							<When condition={isBuiltIn(log)}>
								<p styleName="builtIn-log">{log.value}</p>
							</When>
							<Otherwise>
								<Inspector theme={theme} data={log} />
							</Otherwise>
						</Choose>
					</For>
				</Otherwise>
			</Choose>
			<button styleName="runButton" onClick={props.run}>
				Run Code
			</button>
		</div>
	)
}
