import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import UserCam from "../../../components/UserCam/UserCam";

const ViewPage = (props) => {
	let socket = io();
	let img;

	socket.on("connect", () => {
		socket.on("stream", (imagen) => {
			img = document.getElementById("watch");
			img.src = imagen;
		});

		socket.on("off-air", () => {
			img = document.getElementById("watch");
			img.src = "";
		});
	});

	return (
		<Fragment>
			<Helmet>
				<title>Celupaz Live 🔴</title>
			</Helmet>
			<h1>Nombre de Sala</h1>
			<UserCam>
				<img id='watch' src='' />
			</UserCam>
		</Fragment>
	);
};

export default ViewPage;
