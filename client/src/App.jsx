import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories" element={<Categories />} />
			</Routes>
		</>
	);
}

export default App;
