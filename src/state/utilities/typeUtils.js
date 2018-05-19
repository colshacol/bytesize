import { types, flow, getSnapshot } from 'mobx-state-tree'
import shortId from 'shortid'

export const model = (...args) => {
  return types.model(...args)
}

export const string = types.string

export const id = () => {
  return types.optional(types.string, () => shortId())
}

export const optional = {
  string(defaultValue) {
    return types.optional(types.string, defaultValue)
  },

  boolean(defaultValue) {
    return types.optional(types.boolean, defaultValue)
  },

  number(defaultValue) {
    return types.optional(types.number, defaultValue)
  },

  arrayOf(type) {
    return types.optional(types.optional(types.array(type), []))
  },

  type(referenceType, defaultValue) {
    return types.optional(referenceType, defaultValue)
  },

  maybe(referenceType) {
    return types.maybe(referenceType)
  },

  reference(referenceType, defaultValue) {
    return types.optional(types.reference(referenceType), defaultValue)
  },

  enumeration(name, values = [], defaultValue) {
    return types.optional(types.enumeration(name, values), defaultValue)
  }
}

export const required = {
  string() {
    return types.string
  },

  boolean() {
    return types.boolean
  },

  number() {
    return types.number
  },

  arrayOf(type) {
    return types.array(type)
  },

  type(referenceType) {
    return types.reference(referenceType)
  },

  reference(type) {
    return types.reference(type)
  },

  emumeration(name: string, values: string[] | number[]) {
    return types.enumeration(name, values)
  }
}
