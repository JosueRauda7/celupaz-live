import React from "react";

// Components
import Menu from "../Menu/Menu";

const Layout = (props) => {
	return (
		<div className='Layout'>
			<Menu />
			{props.children}
		</div>
	);
};

export default Layout;
