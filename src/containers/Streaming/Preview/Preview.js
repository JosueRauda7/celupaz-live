import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";

// Components
import Button from "../../../components/UI/Button/Button";
import "../../../components/UserCam/UserCam.css";

const Preview = (props) => {
	const [state, setState] = useState({
		loading: true,
		stream: false,
	});

	let socket = io();
	let localstream, width, height;

	socket.on("connect", () => {
		//Si está emitiendo
		if (state.stream) {
			navigator.getUserMedia =
				navigator.getUserMedia ||
				navigator.webkitGetUserMedia ||
				navigator.mozGetUserMedia ||
				navigator.msgGetUserMedia;

			if (navigator.getUserMedia) {
				navigator.mediaDevices
					.getUserMedia({
						video: {
							facingMode: "user",
						},
						audio: false,
					})
					.then((data) => {
						localstream = data;
						let video = document.getElementById("videoStream");
						video.srcObject = data;
						// data.getVideoTracks()[0].readyState
						// data.getVideoTracks()[0].stop();
						width = data.getVideoTracks()[0].getSettings().width;
						height = data.getVideoTracks()[0].getSettings().height;
						let canvas = document.getElementById("preview");
						let context = canvas.getContext("2d");
						context.width = canvas.width;
						context.height = canvas.height;
						setInterval(() => {
							context.drawImage(
								video,
								(context.width - width / 3) / 2,
								0,
								width / 3,
								height / 3
							);
							socket.emit("stream", canvas.toDataURL("image/webp"));
						}, 100);
					})
					.catch((err) => console.log(err));
			}
		}
	});

	const handleOn = () => {
		setState({
			stream: true,
		});
	};

	const handleOff = () => {
		//Dejando src de vídeo null y limpiando canvas
		document.getElementById("videoStream").srcObject = null;
		let canvas = document.getElementById("preview");
		let context = canvas.getContext("2d");
		context.clearRect(0, 0, canvas.width, canvas.height);
		//Apagando cámara y audio
		if (state.stream) {
			localstream.getTracks().forEach((track) => {
				track.stop();
			});
		}
		setState({ stream: false });
		socket.emit("off-air", {});
	};

	let controlButtons = (
		<div style={{ textAlign: "center" }}>
			<Button click={handleOn} primary>
				Emitir
			</Button>
			<Button click={handleOff} danger>
				{state.stream ? "Detener" : "Cancelar"}
			</Button>
		</div>
	);

	const randomColor = () => {
		return Math.floor(Math.random() * 220) + 80;
	};

	// let color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
	let color = `#2e3440`;

	return (
		<Fragment>
			<Helmet>
				<title>Vista Previa</title>
			</Helmet>
			<h1 className='centered'>Preparación para Transmitir</h1>
			<div className='UserCam'>
				<video id='videoStream' autoPlay></video>
				<canvas style={{ backgroundColor: color }} id='preview'></canvas>
				{controlButtons}
			</div>
		</Fragment>
	);
};

export default Preview;
