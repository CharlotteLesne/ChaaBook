import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Bookpages from "./Pages/Bookpages/Bookpages";
import CreateBook from "./Pages/CreateBook";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/bookpages/:page" element={<Bookpages />} />
				<Route path="/create" element={<CreateBook />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
