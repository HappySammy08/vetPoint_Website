import React from "react";
import logo from "../img/logo_withColor.png";

const Navigation = () => {
	return (
		<nav>
			<a href="/">
				{" "}
				<div className="leftSide">
					<img src={logo} alt="VetPoint_Logo" />

					<div className="webName">
						{" "}
						<span className="vetPoint_logoName">VetPoint</span> <br />
						<span className="lower_logoName">CVMBS Animal Clinic</span>
					</div>
				</div>
			</a>
			<div className="middleSide">
				<ul>
					<li>Services</li>
					<li>About us</li>
					<li>Contacts</li>
					<li>User</li>
				</ul>
			</div>
			<div className="rightSide">
				<a href="/login">
					<button>Login</button>
				</a>
				<a href="/appointmentForm">
					<button>Request Appointment</button>
				</a>
			</div>
		</nav>
	);
};

export default Navigation;
