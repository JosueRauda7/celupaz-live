import React from "react";
import "./Menu.css";
import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { NavLink, Link } from "react-router-dom";

const Menu = (props) => {
	return (
		<div className='Menu'>
			<Link className='LinkLogo' to='/'>
				<Logo />
			</Link>
			<SearchInput />
			<ul>
				<li>
					<NavLink className='Link' activeClassName='Visited' exact to='/'>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink className='Link' activeClassName='Visited' to='/celulas'>
						Células
					</NavLink>
				</li>
				<li>
					<NavLink className='Link' activeClassName='Visited' to='/about'>
						About
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
