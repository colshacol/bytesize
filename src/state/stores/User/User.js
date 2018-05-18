import * as t from '#state/utilities/typeUtils'

export const User = t.model('User', {
  sid: t.optional.string(''),
  email: t.optional.string(''),
  createdDate: t.optional.number(0),
  modules: t.optional.arrayOf(t.string)
})
