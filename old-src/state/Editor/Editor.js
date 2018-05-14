import { types, flow } from 'mobx-state-tree'
import { prettier } from '#utilities/api/prettier'

import { INFINITE_LOOP_DEFAULT_CONTENT } from './consts'

const model = {
  content: types.optional(types.string, '// placeholder')
}

const actions = (self) => {
  const history = []

  return {
    setContent(content) {
      self.content = content
    },

    formatContent: flow(function*() {
      const { code, error } = yield prettier(self.content)
      self.setContent(code)
    })
  }
}

const views = (self) => ({
  get characterCount() {
    return self.content.length
  }
})

export default types
  .model(model)
  .actions(actions)
  .views(views)
