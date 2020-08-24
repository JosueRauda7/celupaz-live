import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import socketIOClient from "socket.io-client";

// Assets
import "./Global.css";

// Components
import Menu from "./components/UI/Menu/Menu";
import Button from "./components/UI/Button/Button";
import UserCam from "./components/UserCam/UserCam";

const puerto = process.env.PORT || 3000;

const App = (props) => {
	const [context, setContext] = useState(null);

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

	return (
		<div style={{ textAlign: "center" }}>
			<Menu />
			<UserCam />
			<Button onClick={handleClick} primary>
				Emitir
			</Button>
			<Button onClick={handleClick} danger>
				Cancelar
			</Button>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
