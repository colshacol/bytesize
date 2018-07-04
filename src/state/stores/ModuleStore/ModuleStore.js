// import { types, flow, getSnapshot } from 'mobx-state-tree'
// import { autorun } from 'mobx'

import * as t from '#state/utilities/typeUtils'
import Module from '#state/stores/Module'

export const ModuleStore = t.model('ModuleStore', {
  activeModule: t.optional.type(Module, {})
})
