import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Form from "../components/Forms";
import Footer from "../components/Footer";

const AppointmentForm = () => {
	return (
		<div>
			<PageTitle title="Animal Clinic Appointment Form" />
			<Form />
		</div>
	);
};

export default AppointmentForm;
