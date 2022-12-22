import React from "react";
import poster1 from "../img/1.jpg";
import poster2 from "../img/2.jpg";
import poster3 from "../img/3.jpg";

const Services = () => {
	return (
		<div className="service">
			<div className="clinicServices">
				<div className="serviceHeader">
					<hr />
					<b>Clinic Services</b>
				</div>
				<div className="boxWrapper">
					<div
						className="service1 serviceOffer"
						style={{ backgroundImage: `url(${poster1})` }}
					></div>

					<div className="nameWrapper">Check-up</div>
				</div>
				<div className="boxWrapper">
					<div
						className="service2  serviceOffer"
						style={{ backgroundImage: `url(${poster2})` }}
					></div>
					<div className="nameWrapper">Dog & Cat Vaccine</div>
				</div>

				<div className="boxWrapper">
					<div
						className="service3  serviceOffer"
						style={{ backgroundImage: `url(${poster3})` }}
					></div>

					<div className="nameWrapper">Surgery</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
