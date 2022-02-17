// const express = require("express");
// const cors = require('cors');

// const app = express();
// // app.use(cors())


// const server = app.listen(8000, () => 
//     console.log("Escuchando el puerto 8000")
// )

// const io = require('socket.io')(server)

// io.on('connection', socket =>{
//     console.log('Encanrtado de conocerte. (Estrechar la mano)')
//     socket.on('event_from_client', ({data}) =>{
//         socket.emit('Welcome', {data})
//     })
// })


const app = require('express')();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket =>{
    console.log('Encanrtado de conocerte. (Estrechar la mano)')
    socket.on('event_from_client', ({data}) =>{
        socket.emit('Welcome', {data})
    })
})

http.listen(8000, function(){
    console.log('listening on port 8000')
})
