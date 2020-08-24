import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import socketIOClient from "socket.io-client";

// Assets
import "./Global.css";

// Components
import Menu from "./components/Menu/Menu";

const puerto = process.env.PORT || 3000;

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

	return <Menu />;
};

ReactDOM.render(<App />, document.getElementById("app"));
