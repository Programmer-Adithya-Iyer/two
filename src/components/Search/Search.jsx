import React from "react";
import "./Search.css";
import { search } from "../../assets/Export";

const Search = () => {
	return (
		<div className="search-wrapper">
			<div className="search-input-container">
				<h4>Location</h4>
				<input type="text" placeholder="Where are you going?" />
			</div>
			<div className="seperator"></div>
			<div className="search-input-container">
				<h4>Check in</h4>
				<input type="text" placeholder="Add dates" />
			</div>
			<div className="seperator"></div>
			<div className="search-input-container">
				<h4>Check out</h4>
				<input type="text" placeholder="Add dates" />
			</div>
			<div className="seperator"></div>
			<div className="search-input-container">
				<h4>Guests</h4>
				<input type="text" placeholder="Add guests" />
			</div>
			<div className="search-icon-container">
				<img src={search} alt="Search icon" />
			</div>
		</div>
	);
};

export default Search;
