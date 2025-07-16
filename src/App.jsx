import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";

function App() {
	return (
		<>
			<div className="main-wrapper">
				<Navbar />
				<Search />
				<Hero />
			</div>
		</>
	);
}

export default App;
