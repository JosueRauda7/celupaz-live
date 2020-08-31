import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
	const [state, setState] = useState({
		lines: 1,
	});

	const handleChanging = (e) => {
		{
			setState({ lines: e.target.value.split("\n").length });
			props.change(e.target.value);
		}
	};

	return (
		<textarea
			className='RemaTxt'
			id='text'
			style={{
				height: `${20 * state.lines}pt`,
			}}
			onChange={(e) => handleChanging(e)}
			placeholder='Escribe un Rema'
		>
			{props.value}
		</textarea>
	);
};

export default Input;
