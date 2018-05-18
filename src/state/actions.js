import { jsonify } from '#state/utilities'

// Root actions.

export const actions = (self) => {
  return {
    jsonify: jsonify(self)
  }
}
