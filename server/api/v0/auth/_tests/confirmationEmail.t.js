import { confirmationEmail, generateEmail } from '../confirmationEmail'

const STUB_EMAIL = 'foo@bar.com'
const STUB_MODULE = {
  sid: 'abc123'
}

describe('generateEmail', () => {
  it('is a function', () => {
    expect(typeof generateEmail).toEqual('function')
    expect(generateEmail).toBeAFunction()
  })

  it('returns a function when invoked once', () => {
    const result = generateEmail(STUB_EMAIL)
    expect(typeof result).toEqual('function')
  })

  it('returns an object when invoked twice', () => {
    const result = generateEmail(STUB_EMAIL)(STUB_MODULE)
    expect(typeof result).toEqual('object')
  })

  it('handles email address properly', () => {
    const result = generateEmail(STUB_EMAIL)(STUB_MODULE)
    expect(result.to).toEqual(STUB_EMAIL)
  })

  it('handles module ID properly', () => {
    const result = generateEmail(STUB_EMAIL)(STUB_MODULE)
    expect(result.text.includes(STUB_MODULE.sid)).toBeTruthy()
    expect(result.html.includes(STUB_MODULE.sid)).toBeTruthy()
  })
})
