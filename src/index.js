import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Assets
import "./Global.css";

// Components
import Layout from "./components/UI/Layout/Layout";

// Containers
import Inicio from "./containers/Inicio/Inicio";
import Preview from "./containers/Streaming/Preview/Preview";
import ViewPage from "./containers/Streaming/ViewPage/ViewPage";

const App = (props) => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Inicio} />
					<Route exact path='/preview' component={Preview} />
					<Route exact path='/watch' component={ViewPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
