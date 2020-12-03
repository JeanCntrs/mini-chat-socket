// Express server
// const app = require('express')();
const express = require('express');

// Sockets server
const http = require('http');

// Socket server configuration
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');

const Sockets = require('./sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {/* configurations */ });
    }

    middlewares() {
        // Public directory
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        // Cors
        this.app.use(cors());
    }

    configureSockets() {
        new Sockets(this.io);
    }

    execute() {
        // Initialize middlewares
        this.middlewares();

        // Initialize sockets
        this.configureSockets();

        // Initialize server
        this.server.listen(this.port, () => {
            console.log('server running on port :', this.port);
        });
    }
}

module.exports = Server;