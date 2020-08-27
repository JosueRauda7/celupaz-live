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
	let localstream;

	socket.on("connect", () => {
		//Si está emitiendo
		if (state.stream) {
			navigator.getUserMedia =
				navigator.getUserMedia ||
				navigator.webkitGetUserMedia ||
				navigator.mozGetUserMedia ||
				navigator.msgGetUserMedia;

			if (navigator.getUserMedia) {
				navigator.getUserMedia(
					{
						video: { facingMode: "user" },
						audio: true,
					},
					(data) => {
						localstream = data;
						let video = document.getElementById("videoStream");
						video.srcObject = data;
						let canvas = document.getElementById("preview");
						let context = canvas.getContext("2d");
						context.width = canvas.width;
						context.height = canvas.height;
						setInterval(() => {
							context.drawImage(video, 0, 0, context.width, context.height);
							socket.emit("stream", canvas.toDataURL("image/webp"));
						}, 100);
					},
					(err) => console.log(err)
				);
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
		localstream.getTracks().forEach((track) => {
			track.stop();
		});
		setState({ stream: false });
	};

	let controlButtons = (
		<div style={{ textAlign: "center" }}>
			<Button click={handleOn} primary>
				Emitir
			</Button>
			<Button click={handleOff} danger>
				{state.stream ? "Dejar de transmitir" : "Cancelar"}
			</Button>
		</div>
	);

	const randomColor = () => {
		return Math.floor(Math.random() * 220) + 80;
	};

	let color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

	return (
		<Fragment>
			<Helmet>
				<title>Vista Previa</title>
			</Helmet>
			<h1 className='centered'>Preparación para Transmitir</h1>
			<div className='UserCam'>
				<video id='videoStream' autoPlay></video>
				<canvas style={{ backgroundColor: color }} id='preview'></canvas>
			</div>
			{controlButtons}
		</Fragment>
	);
};

export default Preview;
