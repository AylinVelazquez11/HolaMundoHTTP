//Llamamos al modulo http
const http =require('http');
//Establecemos la URL o IP de nuestro servidor
const hostname ='192.168.1.121';
//Establecemos el puerto de escucha
const port =3000;
//creamos una instancia HTTP con un request y un response
const server = http.createServer((req,res) =>{
    //El servidor respondera un codigo 200
    res.statusCode=200;
    //El servidor respondera con un texto plano
    res.setHeader('content-Type', 'text/html');
    //El servidor respondera el mensaje hola mundo
    res.end('<h1>Hola Mundo</h1>');
});

server.listen(port,hostname, ()=>{
    console.log('El servidor se esta ejecutando en http:');
})