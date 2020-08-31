import React, { useState } from "react";
import "./PublicarBox.css";
import User from "../UI/Icons/User";

// Components
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const PublicarBox = (props) => {
	let [state, setState] = useState({
		input: null,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (content) => {
		console.log(content);
		if (content.length > 0) {
			console.log(content);
			setState({ input: content });
		} else {
			setState({ input: null });
		}
	};

	return (
		<form className='PublicarBox' onSubmit={handleSubmit}>
			<h2>Publicar Rema</h2>
			<div className='Input'>
				<User height={49} width={49} />
				<Input change={handleChange} value={state.input} />
			</div>
			<div className='ButtonControl'>
				<Button info>Publicar</Button>
			</div>
		</form>
	);
};

export default PublicarBox;
