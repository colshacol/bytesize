import expect from 'expect'
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })

expect.extend({
  toBeAFunction(target) {
    if (typeof target === 'function') {
      return {
        message: () => `expected ${target} not to be a function`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${target} to be a function`,
        pass: false
      }
    }
  },

  toBeAnObject(target) {
    if (!Array.isArray(target) && typeof target === 'object') {
      return {
        message: () => `expected ${target} not to be a object`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${target} to be a object`,
        pass: false
      }
    }
  },

  toBeAnArray(target) {
    if (!Array.isArray(target)) {
      return {
        message: () => `expected ${target} not to be an Array`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${target} to be an Array`,
        pass: false
      }
    }
  }
})
