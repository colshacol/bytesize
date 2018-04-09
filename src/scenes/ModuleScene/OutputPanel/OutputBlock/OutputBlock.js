import * as React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import StayScrolled from 'react-stay-scrolled'
import Inspector from 'react-inspector'

import PlayButton from '#assets/svgs/play-0.svg'
import OptionsButton from '#assets/svgs/more-0.svg'

import ErrorIcon from '#assets/svgs/alert-0.svg'
import WarningIcon from '#assets/svgs/alert-1.svg'
import NormalIcon from '#assets/svgs/alert-2.svg'

import { theme, errorTheme } from '../theme'
import { warningTheme } from './warningTheme'
import './OutputBlock.css'

import { ObjectRootLabel } from 'react-inspector'
import { ObjectLabel } from 'react-inspector'

const LogIcon = props => {
	switch (props.log.type) {
		case 'ERROR':
			return <ErrorIcon styleName="LogIcon" />
		case 'STDERR':
			return <ErrorIcon styleName="LogIcon" />
		case 'WARNING':
			return <WarningIcon styleName="LogIcon" />
		default:
			return <NormalIcon styleName="LogIcon" />
	}
}

const getLogTheme = log => {
	if (log.type === 'WARNING') {
		return warningTheme
	}

	return ['INFO', 'STDOUT'].includes(log.type) ? theme : errorTheme
}

export const OutputBlock = props => {
	return (
		<div styleName={`OutputBlock ${props.log.type}`}>
			<Choose>
				<When condition={props.log.type === 'INFO'}>
					<LogIcon log={props.log} />
					<p key={props.log.uid}>{props.log.message}</p>
				</When>
				<Otherwise>
					<LogIcon log={props.log} />
					<Inspector
						key={props.log.uid}
						theme={getLogTheme(props.log)}
						data={props.log.message}
					/>
				</Otherwise>
			</Choose>
		</div>
	)
}
