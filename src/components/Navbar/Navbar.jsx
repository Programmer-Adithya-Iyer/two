import React from "react";
import "./Navbar.css";
import {
	avatar,
	globe,
	logo,
	menu,
	search,
	heroBackground,
} from "../../assets/Export";

const Navbar = () => {
	return (
		<nav>
			<div className="nav-left">
				<img src={logo} alt="airbnb Logo" />
			</div>
			<div className="nav-center">
				<ul>
					<li className="active">
						<p>Places to stay</p>
						<span></span>
					</li>
					<li>
						<p>Experiences</p>
						<span></span>
					</li>
					<li>
						<p>Online Experiences</p>
						<span></span>
					</li>
				</ul>
			</div>
			<div className="nav-right">
				<ul>
					<li>Become a Host</li>
					<li>
						<img src={globe} alt="Globe" />
					</li>
					<li className="avatar-menu">
						<img src={menu} alt="Menu" />
						<img id="avatar-icon" src={avatar} alt="Avatar" />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
