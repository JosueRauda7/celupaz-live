import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const ViewPage = (props) => {
	let socket = io();

	socket.on("connect", () => {
		socket.on("stream", (imagen) => {
			let img = document.getElementById("watch");
			img.src = imagen;
		});
	});

	return (
		<Fragment>
			<Helmet>
				<title>Celupaz Live 🔴</title>
			</Helmet>
			<img id='watch' src='' />
		</Fragment>
	);
};

export default ViewPage;
