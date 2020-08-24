import React, { Fragment, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

// Components
import Button from "../../../components/UI/Button/Button";
import UserCam from "../../../components/UserCam/UserCam";

const puerto = process.env.PORT || 3000;

const Preview = (props) => {
	const [state, setState] = useState({
		loading: true,
		stream: false,
	});

	useEffect(() => {
		const socket = socketIOClient(`http://localhost:${puerto}/`);
		socket.on("connect", () => {
			console.log("hola");
			socket.on("saludo", () => {
				console.log("Saludo");
			});
		});
	});

	const handleClick = () => {
		alert("hola");
	};

	let controlButtons = (
		<div style={{ textAlign: "center" }}>
			<Button onClick={handleClick} primary>
				Emitir
			</Button>
			<Button onClick={handleClick} danger>
				Cancelar
			</Button>
		</div>
	);

	return (
		<Fragment>
			<h1 className='centered'>Preparación para Transmitir</h1>
			<UserCam preview />
			{controlButtons}
		</Fragment>
	);
};

export default Preview;
