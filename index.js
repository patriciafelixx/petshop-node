const http = require('http');
const petshop = require('./petshop');

const server = http.createServer((req, res) => {
    
    if (req.url == '/listapets') {
        let resultado = petshop.listarPets();
        return res.end(resultado);
    }

    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.end('Você está dentro do sistema petshop!')
})

server.listen(1010, 'localhost');