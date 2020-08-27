import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Assets
import "./Global.css";

// Components
import Layout from "./components/UI/Layout/Layout";

// Containers
import Preview from "./containers/Streaming/Preview/Preview";
import ViewPage from "./containers/Streaming/ViewPage/ViewPage";

const App = (props) => {
	return (
		<Layout>
			<BrowserRouter>
				<Switch>
					<Route exact path='/preview' component={Preview} />
					<Route exact path='/watch' component={ViewPage} />
				</Switch>
			</BrowserRouter>
		</Layout>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
