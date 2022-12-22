import React from "react";

const Poster = () => {
	return (
		<div>
			<div className="slider" style={{ backgroundImage: `url(${poster})` }}>
				{" "}
				<div className="glass">
					<div className="uShape"></div>
					<div className="left"></div>
					<div className="right"></div>
				</div>
				{/* <div className="right"></div> */}
			</div>
		</div>
	);
};

export default Poster;
