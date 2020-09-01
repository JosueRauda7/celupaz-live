import React from "react";
import { Link } from "react-router-dom";
import "./Rema.css";

import User from "../UI/Icons/User";

const Rema = (props) => {
	return (
		<div className='Rema'>
			<Link to='/josuerauda7' className='UserLabel'>
				<User width={39} height={39} />
				<p>{props.usuario}</p>
			</Link>
			<p>{props.rema}</p>
		</div>
	);
};

export default Rema;
