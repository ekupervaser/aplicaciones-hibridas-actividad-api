const http = require('node:http');

const server = http.createServer(function(req, res) {

    res.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Titulo</title></head>');
    
    res.write('<h1>Mi espectacular página Web</h1>');

if (req.url == '/materia') {

    res.write('<p>Apliaciones híbridas</p>');

} else if (req.url == '/profesor') {

    res.write('<p>Brian Esteban Lara Campos</p>');

} else if (req.url == '/alumno') {

    res.write('<p>Ezequiel Kupervaser</p>');

} else {

    res.write("<p>No se encuentra la página solicitada</p>");

}

res.end('</body></html>');

    res.end();
});

server.listen(2022);