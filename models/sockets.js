class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', socket => {
            // Listening event
            socket.on('message-to-server', data => {
                console.log(data)
                // io everything that is connected to that same namespace
                // global message
                this.io.emit('message-from-server', data);
            });
        });

    }
}

module.exports = Sockets;