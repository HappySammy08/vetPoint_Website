import React from "react";
import { FaMapMarkerAlt, FaPhone, FaFacebook } from "react-icons/fa";
import logo from "../img/logo_withColor.png";

import "../css/home.css";

const Footer = () => {
	return (
		<footer>
			<div className="leftSideFooter">
				<div className="lowerFooter">
					<span className="headerTag" style={{ fontWeight: "bold" }}>
						Follow us!
					</span>
					<span>
						<FaFacebook /> https://www.facebook.com/cvsuvetmed
					</span>
					<span className="headerTag" style={{ fontWeight: "bold" }}>
						Contact Information{" "}
					</span>
					<span>
						<FaMapMarkerAlt /> Inside Cavite State University - Main Campus
					</span>
					<span>
						<FaPhone /> (046) 862 0939
					</span>
				</div>

				<div className="footerLogo">
					<img src={logo} alt="VetPoint_Logo" />
				</div>
				<span>VetPoint | CVMBS Animal Clinic</span>
				<span>© 2022</span>
			</div>
		</footer>
	);
};

export default Footer;
