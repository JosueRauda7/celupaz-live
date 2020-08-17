const { io } = require("../../index");

io.on("connection", (client) => {
	client.on("stream", (data) => {
		// Emitir a todos los clientes
		client.broadcast.emit("stream", data);
	});
});
