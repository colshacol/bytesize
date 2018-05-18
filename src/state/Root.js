import { types, flow, getSnapshot } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import ModuleStore from '#state/stores/ModuleStore'
import User from '#state/stores/User'
import * as t from '#state/utilities/typeUtils'

export const Root = types.model('Root', {
  moduleStore: t.optional.type(ModuleStore, {}),
  userStore: t.optional.maybe(User, {})
})
