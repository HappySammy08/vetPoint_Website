import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";

import Footer from "../components/Footer";
import PetLayout from "../components/PetLayout";

import "../css/petLayout.css";

const PetPage = () => {
	return (
		<div>
			<Navigation />
			<PageTitle title="Hachiko" />
			<PetLayout />
			<Footer />
		</div>
	);
};

export default PetPage;
