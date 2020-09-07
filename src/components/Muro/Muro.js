import React from "react";
import "./Muro.css";

// Componentes
import PublicarBox from "../PublicarBox/PublicarBox";
import RemaList from "../RemaList/RemaList";

const Muro = (props) => {
	return (
		<div className='Muro'>
			{/* <h2>Bienvenido {props.usuario}</h2> */}
			<PublicarBox />
			<RemaList remas={props.remas} />
		</div>
	);
};

export default Muro;
