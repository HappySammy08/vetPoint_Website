import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
const ProfilePage = () => {
	return (
		<div>
			<PageTitle title="User Profile" />
			<Profile />
		</div>
	);
};

export default ProfilePage;
