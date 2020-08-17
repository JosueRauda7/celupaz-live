function publicarMensaje(mensaje) {
	document.querySelector(".status").innerText = mensaje;
}

function loadCamara(stream) {
	var video = document.querySelector("#videoStream");
	video.srcObject = stream;
	video.style = "display: none";
	publicarMensaje("Cámara funcionando");
}

function errorCamara() {
	publicarMensaje("Cámara ha fallado");
}
