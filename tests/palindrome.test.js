const { palindrome } = require('../index.js')

test('palindrome of shakira', () => {
  const result = palindrome('shakira')

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
