import React from "react";

// Assets
import "./UserCam.css";

const UserCam = (props) => {
	return (
		<div className='UserCam'>
			<video src='' id='videoStream' autoPlay></video>
			<canvas id='preview'></canvas>
		</div>
	);
};

export default UserCam;
