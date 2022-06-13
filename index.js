// ncluye la librería de express
const express = require('express')
// const { palindrome } = require('./utils/for_testing')
const app = express()

// definimos un puerto para HTTP
const port = process.env.PORT || 3000

app.get('/health', (req, res) => {
  res.send('ok')
})

const palindrome = (string) => {
  if (typeof string === 'undefined') return
  return string
    .split('') // convierte en un array
    .reverse() // reversa el array
    .join('') // convierte en un string
}

// Creamos una ruta para el directorio raíz en este caso solo envía el texto 'Hello world!!!' pero es común que se envíe una vista (archivo HTML)
app.get('/', (req, res) => {
  res.send(palindrome('shakira'))
})

// Comienza a escuchar el puerto definido 3000
app.listen(port, () => {
  console.log('Listen on the port 3000')
})

module.exports = {
  palindrome
}
