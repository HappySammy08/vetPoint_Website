import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Form from "../components/Forms";

import Footer from "../components/Footer";

import "../css/appointment.css";

const AppointmentForm = () => {
	return (
		<div>
			<Navigation />
			<PageTitle title="Animal Clinic Appointment Form" />
			<Form />
			<Footer />
		</div>
	);
};

export default AppointmentForm;
