import React from "react";
import "./Muro.css";

// Componentes
import PublicarBox from "../PublicarBox/PublicarBox";

const Muro = (props) => {
	return (
		<div className='Muro'>
			<h1>Bienvenido {props.usuario}</h1>
			<PublicarBox />
		</div>
	);
};

export default Muro;
