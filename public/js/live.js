var socket = io();

var app = document.getElementById("app");
var botonEmitir = document.getElementById("btnEmitir");
var videoStream = document.getElementById("videoStream");
var canvas = document.getElementById("preview");
var status = document.getElementById("status");

socket.on("connect", () => {
	console.log("Conectado");

	var context = canvas.getContext("2d");
	canvas.width = 512;
	canvas.height = 384;
	context.width = canvas.width;
	context.height = canvas.height;

	botonEmitir.addEventListener("click", () => {
		navigator.getUserMedia =
			navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msgGetUserMedia;

		if (navigator.getUserMedia) {
			navigator.getUserMedia(
				{ video: true, audio: false },
				loadCamara,
				errorCamara
			);

			var intervaloVideo = setInterval(() => {
				verVideo(context);
			}, 100);
		}
	});
});

function verVideo(context) {
	context.drawImage(videoStream, 0, 0, context.width, context.height);
	socket.emit("stream", canvas.toDataURL("image/webp"));
}

socket.on("disconnect", () => {});
