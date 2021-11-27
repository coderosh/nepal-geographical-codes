import { capitalize } from '../src/utils'

describe('utils:capitalize', () => {
  test('should capitalize on word', () => {
    expect(capitalize('roshan')).toBe('Roshan')
  })

  test('should capitalize multiple words', () => {
    expect(capitalize('roshan acharya')).toBe('Roshan Acharya')
  })

  test('should lowercase letters than first', () => {
    expect(capitalize('I AM ROshAn achaRya')).toBe('I Am Roshan Acharya')
  })
})
