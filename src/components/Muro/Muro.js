import React, { useState } from "react";
import "./Muro.css";

// Componentes
import PublicarBox from "../PublicarBox/PublicarBox";
import RemaList from "../RemaList/RemaList";

const Muro = (props) => {
	const [state, setState] = useState({
		remas: [
			{
				id: 0,
				usuario: "Josué Rauda",
				rema: "Todo lo que respire alabe al Señor",
			},
			{
				id: 1,
				usuario: "Katya Carrillo",
				rema:
					"Anhelo el día que venga Jesús porque ese día llegaré a ver su rostro",
			},
			{
				id: 2,
				usuario: "Andrea Clemente",
				rema:
					"Ama al Señor tu Dios con todo tu corazón, con toda tu alma y con todas tus fuerzas",
			},
			{
				id: 3,
				usuario: "Andrea Clemente",
				rema:
					"Ama al Señor tu Dios con todo tu corazón, con toda tu alma y con todas tus fuerzas",
			},
		],
	});

	return (
		<div className='Muro'>
			{/* <h2>Bienvenido {props.usuario}</h2> */}
			<PublicarBox />
			<RemaList remas={state.remas} />
		</div>
	);
};

export default Muro;
