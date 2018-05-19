import { ModuleStore } from './ModuleStore'
import { actions } from './actions'
import { views } from './views'

export default ModuleStore.actions(actions).views(views)
