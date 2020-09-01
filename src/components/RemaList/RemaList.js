import React, { Fragment } from "react";

// Components
import Rema from "../Rema/Rema";

const RemaList = (props) => {
	return (
		<Fragment>
			{props.remas.map((rema) => {
				return <Rema key={rema.id} usuario={rema.usuario} rema={rema.rema} />;
			})}
		</Fragment>
	);
};

export default RemaList;
