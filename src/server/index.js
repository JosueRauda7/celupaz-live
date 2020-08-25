const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const http = require("https");

const app = express();
let server = http.createServer(app);

const puerto = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname + "./../../build");
// const publicPath = path.resolve(__dirname + "./../public");

app.use(express.static(publicPath));

// Sockets
module.exports.io = socketIO(server);
require("./sockets");

server.listen(puerto, (err) => {
	if (err) throw new Error(err);
	console.log(`Escuchando en el puerto ${puerto}`);
});
