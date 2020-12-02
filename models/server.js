// Express server
// const app = require('express')();
const express = require('express');

// Sockets server
const http = require('http');

// Socket server configuration
const socketio = require('socket.io');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.port = 8080;
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {/* configurations */ });
    }

    middlewares() {
        // Public directory
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }

    confSockets() {

    }

    execute() {
        // Initialize middlewares
        this.middlewares();

        // Initialize sockets
        this.confSockets();

        // Initialize server
        this.server.listen(this.port, () => {
            console.log('server running on port :', this.port);
        });
    }
}

module.exports = Server;