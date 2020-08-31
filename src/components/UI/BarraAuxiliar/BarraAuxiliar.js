import React from "react";
import { Link } from "react-router-dom";
import "./BarraAuxiliar.css";
import Tema from "./Tema/Tema";

const BarraAuxiliar = (props) => {
	return (
		<div className='BarraAuxiliar'>
			<h3>Remas favoritos</h3>
			<hr />
			<ul>
				<li>
					<Link className='Link' to='/temas/en+el+camino'>
						<Tema dia='Sábado' hashtag='#EnElCamino' ranking={27} />
					</Link>
				</li>
				<li>
					<Link className='Link' to='/temas/en+el+camino'>
						<Tema dia='Sábado' hashtag='#EnElCamino' ranking={27} />
					</Link>
				</li>
				<li>
					<Link className='Link' to='/temas/en+el+camino'>
						<Tema dia='Sábado' hashtag='#EnElCamino' ranking={27} />
					</Link>
				</li>
				<li>
					<Link className='Link' to='/temas/en+el+camino'>
						<Tema dia='Sábado' hashtag='#EnElCamino' ranking={27} />
					</Link>
				</li>
				<li>
					<Link className='Link' to='/temas/en+el+camino'>
						<Tema dia='Sábado' hashtag='#EnElCamino' ranking={27} />
					</Link>
				</li>
				<li>
					<Link className='Link' to='/temas/en+el+camino'>
						<Tema dia='Sábado' hashtag='#EnElCamino' ranking={27} />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default BarraAuxiliar;
