import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import { FaCheckCircle } from "react-icons/fa";
const Schedule = () => {
	const [dateState, setDateState] = useState(new Date());

	const changeDate = (e) => {
		setDateState(e);
	};

	return (
		<div>
			<div className="scheduleWrapper">
				<Calendar value={dateState} onChange={changeDate} />

				<div className="scheduleDetails">
					<section>
						<div className="scheduleDetailsHeader">
							<h2>
								{" "}
								<FaCheckCircle /> Pick a date
							</h2>
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

export default Schedule;
