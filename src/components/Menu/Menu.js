import React, { Fragment } from "react";
import "./Menu.css";
import Logo from "../UI/Logo";

const Menu = (props) => {
	return (
		<div className='Menu'>
			<Logo />
			<input type='text' className='Search' placeholder='Buscar' />
			<ul>
				<li>Inicio</li>
				<li>Células</li>
				<li>About</li>
			</ul>
		</div>
	);
};

export default Menu;
