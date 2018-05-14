import { types, flow } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import { EditorState } from '../Editor'
import { LessonState } from '../Lesson'
import { OutputState } from '../Output'
import { UserState } from '../User'
import { AuthState } from '../Auth'

console.log({ EditorState, LessonState, OutputState, UserState, AuthState })

import * as common from './common'

const model = {
  editor: types.optional(EditorState, {}),
  lesson: types.optional(LessonState, {}),
  output: types.optional(OutputState, {}),
  user: types.optional(UserState, {}),
  auth: types.optional(AuthState, {})
}

const actions = (self) => ({
  activateModule: common.activateModule(self)
})

export const MainState = makeInspectable(
  types
    .model(model)
    .actions(actions)
    .create({})
)
