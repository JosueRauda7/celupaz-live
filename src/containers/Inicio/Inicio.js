import React from "react";

// Components
import BarraLateral from "../../components/UI/BarraLateral/BarraLateral";
import Muro from "../../components/Muro/Muro";
import BarraAuxiliar from "../../components/UI/BarraAuxiliar/BarraAuxiliar";

const Inicio = (props) => {
	return (
		<div>
			<BarraLateral />
			<BarraAuxiliar />
			<Muro usuario='Josué Rauda' />
		</div>
	);
};

export default Inicio;
