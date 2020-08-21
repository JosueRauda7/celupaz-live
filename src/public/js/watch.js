var socket = io();
var app = document.getElementById("app");
var img = document.getElementById("play");

socket.on("stream", (imagen) => {
	img.src = imagen;
});

socket.on("off-air", () => {
	// console.log("desconectado");
	img.src = "";
});
