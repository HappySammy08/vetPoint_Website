import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import { FaMapMarkerAlt, FaPhone, FaMailBulk } from "react-icons/fa";

import poster_1 from "../img/poster_1.jpg";
import poster_2 from "../img/poster_2.jpg";

const images = [{ url: poster_1 }, { url: poster_2 }];

const Features = () => {
	return (
		<div className="features">
			<div className="featureHeader">
				<hr />
				<b>Look</b>
			</div>
			<div className="featuresColumnWrapper">
				<div className="information">
					<div className="informationDetails">
						<section>
							<span className="bullets">
								<FaMapMarkerAlt />
							</span>{" "}
							<span className="bulletsItems">
								Inside Cavite State University - Main Campus <br />
								<span className="smallDetails">Address</span>
							</span>
						</section>
						<section>
							<span className="bullets">
								<FaPhone />{" "}
							</span>

							<span className="bulletsItems">
								{" "}
								(046) 862 0939 <br />
								<span className="smallDetails">Telephone Number</span>
							</span>
						</section>
						<section>
							<span className="bullets">
								<FaMailBulk />
							</span>{" "}
							<span className="bulletsItems">
								cvsuvetmed@gmail.com <br />{" "}
								<span className="smallDetails">Email</span>
							</span>
						</section>
					</div>
				</div>
				<div className="posters">
					<div>
						<SimpleImageSlider
							width={400}
							height={500}
							images={images}
							showBullets={true}
							showNavs={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Features;
