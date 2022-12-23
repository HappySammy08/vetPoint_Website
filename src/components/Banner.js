// image
import banner from "../img/web_banner.jpg";
import React from "react";

const Banner = () => {
	return (
		<header>
			<div className="lowerHeader">
				<div className="banner" style={{ backgroundImage: `url(${banner})` }}>
					<div className="welcome">
						<div>
							{" "}
							<h1>Welcome!</h1>
							<span>
								We are Cavite State Univ. - College of Veterinary Medicine and
								Biomedical Sciences Animal Clinic
							</span>
							<br />
							<button type="submit">Request Appointment</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Banner;
