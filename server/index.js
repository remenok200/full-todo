const http = require('http');
const  { Server } = require("socket.io");
const app = require('./app');

const cors = {
    origin: '*'
}

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {cors});

io.on('connect', (socket) => {
    console.log('CONNECTION!');

    // задача, кожні 5 секунд відправляти push-повідомлення на клієнт
    setInterval(() => {
        io.emit('NEW_NOTIFICATION', {notification: 'Something new happened'});
    }, 100000);

    socket.on('disconnect', (reason) => {
        console.log(reason);
    })
})

server.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});