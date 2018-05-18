import { Module } from './Module'
import { actions } from './actions'
import { views } from './views'

Module.actions(actions)
Module.views(views)

export default Module
