import React from "react";
import dog_sample from "../img/dog.png";

const PetLayout = () => {
	return (
		<div className="petLayoutWrapper">
			{" "}
			<div className="profile">
				<div className="avatar">
					<img src={dog_sample} alt="VetPoint_Logo" />
				</div>
				<div className="profileInfo">
					<span className="username">Hachiko</span>
				</div>
			</div>
			<div className="rightPetSide">
				<div className="petDetails">
					<b>Pet Information</b>

					<table>
						<tr>
							<td className="border-right">Breed</td>
							<td className="underline">Japanese Akita</td>
							<td className="border-right">Species:</td>
							<td className="underline">Dog</td>
						</tr>
						<tr>
							<td className="border-right">Age</td>
							<td className="underline">12 year old </td>
							<td className="border-right">Birthday</td>
							<td>10 November 1923</td>
						</tr>
						<tr>
							<td className="border-right">Color</td>
							<td className="underline">Yellow</td>
							<td className="border-right">Sex</td>
							<td className="underline">Male</td>
						</tr>
					</table>
				</div>
				<div className="previousVisit">
					<b>Previous Visits</b>
				</div>
			</div>
		</div>
	);
};

export default PetLayout;
