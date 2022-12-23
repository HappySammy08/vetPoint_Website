import React, { useEffect, useLocation } from "react";
import logo from "../img/logo_withColor.png";
import { FaUserCircle } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

let isUserLoggedIn = false;

const Navigation = ({ refs }) => {
	const scrollSmoothHandler = (ref) => {
		console.log(ref);
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav>
			<Link to="/">
				{" "}
				<div className="leftSide">
					<img src={logo} alt="VetPoint_Logo" />

					<div className="webName">
						{" "}
						<span className="vetPoint_logoName">VetPoint</span> <br />
						<span className="lower_logoName">CVMBS Animal Clinic</span>
					</div>
				</div>
			</Link>
			<div className="middleSide">
				<ul>
					<NavLink
						onClick={() => {
							setTimeout(() => {
								scrollSmoothHandler(refs.featuresRef);
							}, 1000);
						}}
					>
						<li>
							<span>Contacts</span>
						</li>
					</NavLink>
					<NavLink
						onClick={() => {
							setTimeout(() => {
								scrollSmoothHandler(refs.serviceRef);
							}, 1000);
						}}
					>
						<li>
							<span>Services</span>
						</li>
					</NavLink>
					<NavLink
						onClick={() => {
							setTimeout(() => {
								scrollSmoothHandler(refs.aboutRef);
							}, 1000);
						}}
					>
						<li>
							<span>About us</span>
						</li>
					</NavLink>
				</ul>
			</div>
			<div className="rightSide">
				{isUserLoggedIn ? (
					<div className="userLogo">
						{" "}
						<FaUserCircle />{" "}
					</div>
				) : (
					<div className="rightSideBtns">
						<Link to="/login">
							{" "}
							<button>Login</button>
						</Link>
						<Link to="/appointmentform">
							<button>Request Appointment</button>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
