import { Root } from './Root'
import { actions } from './actions'
import { views } from './views'

Root.actions(actions)
Root.views(views)

export default Root.create()
