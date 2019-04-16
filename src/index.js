import React from "react";
import ReactDOM from "react-dom";
import DishwasherListing from "./dishwasherListing"
import DishWasherModel from "./dishwasherModel"
import { BrowserRouter, Route, Link } from 'react-router-dom';

import "./styles.css";

function App() {
  return (

		// App routes
		<BrowserRouter>
			<Route exact path="/" component={DishwasherListing} />
			<Route path="/product" component={DishWasherModel} />
		</BrowserRouter>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
