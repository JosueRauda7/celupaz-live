import * as React from "react";
import "./Logo.css";

function Logo(props) {
	return (
		<svg
			className={props.streaming ? "On" : "Off"}
			data-name='CelupazLiveIcon'
			viewBox='0 0 888.35 214.7'
			{...props}
		>
			<title>
				{props.streaming ? "CelupazLive | Emitiendo 🔴" : "CelupazLive"}
			</title>
			<text
				transform='translate(27.66 132.8)'
				fill='#fff'
				fontSize={166}
				fontFamily='DoHyeon-Regular,Do Hyeon'
			>
				{"CelupazLive"}
			</text>
			<ellipse cx={845.76} cy={129.21} rx={42.59} ry={40.4} fill='#e7426e' />
			<ellipse cx={845.76} cy={129.21} rx={18.29} ry={17.35} fill='#fff' />
		</svg>
	);
}

export default Logo;
