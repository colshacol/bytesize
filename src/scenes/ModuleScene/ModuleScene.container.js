import * as React from 'react'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

import { Render } from './ModuleScene.render'

export class Container extends React.Component {
	storeEditor = editor => {}
	static displayName = 'ModuleScene'

	render = () => Render(this)
}
