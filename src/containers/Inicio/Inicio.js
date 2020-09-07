import React, { useState } from "react";
import "./Inicio.css";

// Components
import BarraLateral from "../../components/UI/BarraLateral/BarraLateral";
import Muro from "../../components/Muro/Muro";
import BarraAuxiliar from "../../components/UI/BarraAuxiliar/BarraAuxiliar";

const Inicio = (props) => {
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
		<div className='Inicio'>
			<BarraLateral />
			<BarraAuxiliar />
			<Muro remas={state.remas} usuario='Josué Rauda' />
		</div>
	);
};

export default Inicio;
