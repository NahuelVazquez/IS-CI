const { palindrome } = require('../utils/for_testing')

test('palindrome of shakira', () => {
  const result = palindrome('nahuel')

  expect(result).toBe('arikahs')
})

test('palindrome of empty string', () => {
  const result = palindrome('')

  expect(result).toBe('')
})

test('palindrome of undefined', () => {
  const result = palindrome()

  expect(result).toBeUndefined()
})
