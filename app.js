
const http = require('http')
const cursos = require('./cursos.js')

servidor = http.createServer((req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res)
        default:
            console.log(`El método ${method}, no puede ser manejado por el Servidor`)
    }

})

function manejarSolicitudGET(req, res) {
    const path = req.url

    if (path === '/') {
        res.statusCode = 200
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }
}

const PUERTO = 3000

servidor.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el ${PUERTO} `)
})

