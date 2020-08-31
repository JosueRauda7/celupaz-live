import React from "react";
import "./BarraLateral.css";
import { Link } from "react-router-dom";

// Icons
import Celupaz from "../Icons/CelupazIcon";
import Calendar from "../Icons/Calendar";
import Help from "../Icons/Help";
import User from "../Icons/User";

const BarraLateral = (props) => {
	return (
		<div className='BarraLateral'>
			<ul>
				<li>
					<Link className='Link' to='/'>
						<User height={29} width={29} />
						Josué Rauda
					</Link>
				</li>
				<li>
					<Link className='Link' to='/celupaz/San+José'>
						<Celupaz height={29} width={29} />
						Mi Celupaz
					</Link>
				</li>
				<li>
					<Link className='Link' to='/celupaz/San+José'>
						<Calendar height={29} width={29} />
						Calendario
					</Link>
				</li>
				<li>
					<Link className='Link' to='/celupaz/San+José'>
						<Help height={29} width={29} />
						Ayuda
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default BarraLateral;
