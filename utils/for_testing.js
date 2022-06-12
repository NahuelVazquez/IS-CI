const palindrome = (string) => {
  if (typeof string === 'undefined') return
  return string
    .split('') // convierte en un array
    .reverse() // reversa el array
    .join('') // convierte en un string
}

module.exports = {
  palindrome
}
