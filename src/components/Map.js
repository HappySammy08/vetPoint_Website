import React from "react";
import "../css/map.css";
const Map = () => {
	return (
		<div class="mapouter">
			<div class="gmap_canvas">
				<iframe
					class="gmap_iframe"
					width="100%"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=6V3J+2MM, • Indang, • Cavite, Province of Cavite, Lalawigan ng Kabite, Kabite, PH-CAV]&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				></iframe>
				<a href="https://formatjson.org/">format json</a>
			</div>
		</div>
	);
};

export default Map;
