import { Root } from './Root'
import { actions } from './actions'
import { views } from './views'

Root.actions(actions)
Root.views(views)

const root = Root.create()
window.rootStore = root
export default root
