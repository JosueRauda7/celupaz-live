import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import socketIOClient from "socket.io-client";

// Components
import HolaMundo from "./components/HolaMundo/HolaMundo";

const App = (props) => {
	useEffect(() => {
		const socket = socketIOClient("http://localhost:3000/");
		socket.on("connect", () => {
			console.log("hola");
			socket.on("saludo", () => {
				console.log("Saludo");
			});
		});
	});

	return <h1>Hola</h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));
