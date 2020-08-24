import React, { Fragment } from "react";
import "./HolaMundo.css";
import CelupazLive from "../../assets/img/CelupazLive.png";

const HolaMundo = (props) => {
	return (
		<Fragment>
			<h1 className='HolaMundo'>Hola Crayola</h1>
			<img src={CelupazLive} />
		</Fragment>
	);
};

export default HolaMundo;
