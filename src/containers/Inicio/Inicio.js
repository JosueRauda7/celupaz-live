import React from "react";
import "./Inicio.css";

// Components
import BarraLateral from "../../components/UI/BarraLateral/BarraLateral";
import Muro from "../../components/Muro/Muro";
import BarraAuxiliar from "../../components/UI/BarraAuxiliar/BarraAuxiliar";

const Inicio = (props) => {
	return (
		<div className='Inicio'>
			<BarraLateral />
			<BarraAuxiliar />
			<Muro usuario='Josué Rauda' />
		</div>
	);
};

export default Inicio;
