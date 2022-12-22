import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import "../css/styles.css";
const ProfilePage = () => {
	return (
		<div>
			<Navigation />
			<PageTitle title="User Profile" />
			<Profile />
			<Footer />
		</div>
	);
};

export default ProfilePage;
