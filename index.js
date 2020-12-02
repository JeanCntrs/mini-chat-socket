const Server = require('./models/server');

const server = new Server();

server.execute();


/* io.on('connection', socket => {
    // Listening
    socket.on('message-to-server', data => {
        console.log(data)
        // io everything that is connected to that same namespace
        // global message
        io.emit('message-from-server', data);
    });

    console.log(`client connected ${socket.id}`);

    socket.emit('welcome-message', {
        msg: 'Welcome to the server',
        date: new Date()
    });

    socket.on('client-message', data => {
        console.log(data)
    });
});
 */
