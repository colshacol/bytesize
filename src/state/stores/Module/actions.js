import { jsonify } from '#state/utilities'

export const actions = (self) => {
  return {
    jsonify: jsonify(self)
  }
}
