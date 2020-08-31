import React, { Fragment } from "react";

const Tema = (props) => {
	const info = {
		fontSize: "14px",
	};

	return (
		<Fragment>
			<p style={info}>{props.dia}</p>
			<p
				style={{
					fontWeight: "bold",
					fontSize: "16px",
				}}
			>
				{props.hashtag}
			</p>
			<p style={info}>{props.ranking} remas</p>
		</Fragment>
	);
};

export default Tema;
