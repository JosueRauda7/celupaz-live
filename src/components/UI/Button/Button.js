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

	return <button className={classes.join(" ")}>{props.children}</button>;
};

export default Button;
