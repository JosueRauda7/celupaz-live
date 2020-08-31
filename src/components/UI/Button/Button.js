import React from "react";

// Assets
import "./Button.css";

const Button = (props) => {
	let classes = ["Button"];

	if (props.primary) {
		classes.push("primary");
	}

	if (props.danger) {
		classes.push("danger");
	}

	if (props.info) {
		classes.push("info");
	}

	switch (props.position) {
		case "rigth":
			classes.push("Right");
			break;

		case "left":
			classes.push("Left");
			break;
	}

	return (
		<button onClick={props.click} className={classes.join(" ")}>
			{props.children}
		</button>
	);
};

export default Button;
