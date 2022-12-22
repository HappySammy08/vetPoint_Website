import React from "react";
import { FaPlus } from "react-icons/fa";

import avatarSample from "../img/avatar_example.png";

import dog_sample from "../img/dog.png";

const Profile = () => {
	return (
		<div className="profileWrapper">
			<div className="leftProfileSide">
				<div className="avatar">
					<img src={avatarSample} alt="VetPoint_Logo" />
				</div>
				<div className="profileInfo">
					<span className="username">Summer Kate Nadela</span>

					<div className="profileInfoList">
						<table>
							<tr>
								<td>Age</td>
								<td>21</td>
							</tr>
							<tr>
								<td>Phone Number</td>
								<td>09203237534</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>Trece Martires City, Cavite</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div className="rightProfileSide">
				<div className="upperProfileWrapper">
					<div className="petImageWrapper">
						<a href="/petpage">
							<div className="petImage filled">
								<img src={dog_sample}></img>
							</div>
						</a>
						<span className="petName">Name</span>
					</div>
					<div className="petImageWrapper">
						{" "}
						<div className="petImage empty">
							<FaPlus />
						</div>
						<span className="petName">Name</span>
					</div>
					<div className="petImageWrapper">
						{" "}
						<div className="petImage empty">
							<FaPlus />
						</div>
						<span className="petName">Name</span>
					</div>
				</div>

				<div className="lowerProfileSide">
					<div className="lowerProfileSide-header">
						<b>Appointments</b>
					</div>

					<div className="lowerProfileSide-body">
						<span>No appointments scheduled</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
