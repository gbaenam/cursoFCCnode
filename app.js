const http = require('http')
const cursos = require('./cursos.js')

servidor = http.createServer((req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res)
        case 'POST':
            return manejarSolicitudPOST(req, res)
        default:
            res.statusCode = 501
            res.end(`El método ${method}, no puede ser manejado por el Servidor`)
            break
    }
})

function manejarSolicitudGET(req, res) {
    const path = req.url

    if (path === '/') {
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    } else if (path === '/cursos') {
        res.end(JSON.stringify(cursos))
    } else if (path === '/cursos/programacion') {
        res.end(JSON.stringify(cursos.programacion))
    } else {
        res.statusCode = 404
        res.end('El recurso solicitado no existe')
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url

    if (path === '/cursos/programacion') {

        let cuerpo =''

        req.on('data', contenido => {
            cuerpo += contenido.toString()
        })

        req.on('end', () => {
            cuerpo = JSON.parse(cuerpo)
            console.log(cuerpo)
            console.log(typeof cuerpo)
            console.log(cuerpo.titulo)
            res.end('El servidor recibió una solicitud POST para /cursos/programacion')
        })
    }
}

const PUERTO = 3000

servidor.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO} `)
})

















