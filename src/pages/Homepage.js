import React, { forwardRef, useState, useRef } from "react";

import Banner from "../components/Banner";
import Service from "../components/Service";
import About from "../components/About";
import Feature from "../components/Feature";

const Homepage = forwardRef((props, ref) => {
	return (
		<div>
			<Banner />
			<Feature ref={ref.ref1} />
			<Service ref={ref.ref3} />
			<About ref={ref.ref2} />
		</div>
	);
});

export default Homepage;
