import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import { FaCheckCircle } from "react-icons/fa";
const Form = () => {
	const [dateState, setDateState] = useState(new Date());
	const [inputType, setInputType] = useState("password");

	const changeDate = (e) => {
		setDateState(e);
	};

	const showPassword = () => {
		if (inputType === "password") {
			setInputType("text");
		} else {
			setInputType("password");
		}
	};

	return (
		<div className="appointmentSchedWrapper">
			<div className="appointmentFormWrapper">
				<div className="appointmentForm">
					<form id="appointmentForm">
						<h3>Owner's Basic Information</h3>
						<div className="firstLastSuffix">
							<span>
								{" "}
								<label>Your First Name</label>
								<br />
								<input type="text" required></input>
							</span>

							<span>
								<label>Your Last Name</label>
								<br />
								<input type="text" required></input>
							</span>
						</div>

						<div className="bday">
							<span className="birthday">
								{" "}
								<label>Your Date of Birth</label>
								<input type="date" required></input>
							</span>
						</div>

						<div className="phoneNumber">
							<span className="phoneNumber">
								<label>Phone Number</label>
								<input type="text" required></input>
							</span>
							<span>
								<label>Email Address</label>
								<input type="email" required></input>
							</span>
						</div>

						<div className="password">
							<span className="password_first">
								<label>Password</label>
								<input type={inputType} id="firstPassword" required></input>
							</span>
							<span className="password_confirm">
								<label>Confirm Password</label>
								<input type={inputType} required></input>
							</span>
							<span>
								<input
									type="checkbox"
									onClick={() => {
										showPassword();
									}}
								/>
								Show Password
							</span>
						</div>

						<div className="checklist">
							<span>
								<label>Number of Pets</label>
								<input type="number" required></input>
							</span>
						</div>

						<h3>Pet's Basic Information</h3>
						<div className="petNamebday">
							<span>
								<label>Pet's Name</label>
								<input type="text" required></input>
							</span>

							<span>
								<label>Pet's Date of Birth</label>
								<input type="date" required></input>
							</span>
						</div>

						<div className="genderBreed">
							<span>
								<label>Pet's Gender</label>
								<select id="genderPet" name="genderPet">
									<option value="Female">Female</option>
									<option value="Male">Male</option>
								</select>
							</span>

							<span>
								<label>Breed</label>
								<input type="text" required></input>
							</span>
						</div>

						<div className="speciesSpayColor">
							<span>
								<label>Species</label>
								<input type="text" required></input>
							</span>

							<span className="spayed">
								<label>Spayed/Neutered</label>
								<br></br>
								<input type="checkbox" id="yes_option1" value="yes" required />
								<label>Yes</label>
								<input type="checkbox" id="no_option1" value="no" required />
								<label>No</label>
							</span>
						</div>
					</form>
				</div>
			</div>

			<div className="scheduleWrapper">
				<Calendar value={dateState} onChange={changeDate} />

				<div className="scheduleDetails">
					<section>
						<div className="scheduleDetailsHeader">
							<h3>
								{" "}
								<FaCheckCircle /> Set a Schedule Date
							</h3>
							<section className="legend">
								<ul>
									<li>
										<div className="yellow"> </div> - Date today
									</li>
									<li>
										<div className="blue"></div> - Selected Date
									</li>
									<li>
										<div className="gray"></div> - Unavailable Date
									</li>
								</ul>
							</section>
						</div>
						<ul>
							<li>
								Date: <b>{moment(dateState).format("LL")}</b>
							</li>
							<li>
								Day: <b>{moment(dateState).format("dddd")}</b>{" "}
							</li>
							<li>Number:</li>
						</ul>
					</section>
				</div>
			</div>

			<div className="buttonWrapper">
				<button form="appointmentForm" type="submit">
					Submit
				</button>
			</div>
		</div>
	);
};

export default Form;
