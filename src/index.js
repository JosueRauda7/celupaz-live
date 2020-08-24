import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Assets
import "./Global.css";

// Components
import Layout from "./components/UI/Layout/Layout";

// Containers
import Preview from "./containers/Streaming/Preview/Preview";

const App = (props) => {
	return (
		<Layout>
			<Preview />
		</Layout>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
