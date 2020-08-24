import React, { Fragment } from "react";
import "./Menu.css";
import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";

const Menu = (props) => {
	return (
		<div className='Menu'>
			<Logo />
			<SearchInput />
			<ul>
				<li>Inicio</li>
				<li>Células</li>
				<li>About</li>
			</ul>
		</div>
	);
};

export default Menu;
