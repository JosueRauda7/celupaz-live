import React from "react";

// Assets
import "./UserCam.css";

const UserCam = (props) => {
	let classes = ["UserCam"];

	if (props.preview) {
		classes.push("preview");
	}

	const randomColor = () => {
		return Math.floor(Math.random() * 220) + 80;
	};

	let color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

	return (
		<div className={classes.join(" ")}>
			<video id='videoStream' autoPlay></video>
			<canvas style={{ backgroundColor: color }} id='preview'></canvas>
		</div>
	);
};

export default UserCam;
