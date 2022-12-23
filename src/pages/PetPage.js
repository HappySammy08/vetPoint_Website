import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";

import Footer from "../components/Footer";
import PetLayout from "../components/PetLayout";

const PetPage = () => {
	return (
		<div>
			<PageTitle title="Hachiko" />
			<PetLayout />
		</div>
	);
};

export default PetPage;
