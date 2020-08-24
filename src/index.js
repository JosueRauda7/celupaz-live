import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import socketIOClient from "socket.io-client";

const puerto = process.env.PORT || 3000;

// Components
import HolaMundo from "./components/HolaMundo/HolaMundo";

const App = (props) => {
	useEffect(() => {
		const socket = socketIOClient(`http://localhost:${puerto}/`);
		socket.on("connect", () => {
			console.log("hola");
			socket.on("saludo", () => {
				console.log("Saludo");
			});
		});
	});

	return <HolaMundo />;
};

ReactDOM.render(<App />, document.getElementById("app"));
