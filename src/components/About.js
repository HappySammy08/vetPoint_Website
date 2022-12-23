import React, { forwardRef } from "react";
import aboutImg from "../img/service.jpg";

const About = forwardRef((props, ref) => {
	return (
		<div ref={ref} className="about" id="about">
			<div className="aboutHeader">
				<hr />
				<b>About us</b>
			</div>
			<div className="imgAbout">
				{" "}
				<div className="imgPart">
					{" "}
					<img src={aboutImg} alt="vetMed_about"></img>
				</div>
				<div className="infoAbout">
					<p>
						We are Cavite State University College of Medicine and Biomedical
						Sciences - Animal Clinic. Our clinic is conveniently located inside
						Cavite State University - Main Campus. <br /> <br /> CvSU-CVMBS was
						founded in 2000, thus is one of the young veterinary schools in the
						Philippines.
					</p>
				</div>
			</div>
		</div>
	);
});

export default About;
