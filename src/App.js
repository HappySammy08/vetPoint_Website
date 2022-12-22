import Header from "./components/Header";
import Features from "./components/Features";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

/* Pages */
import LoginPage from "./pages/LoginPage";
import AppointmentForm from "./pages/AppointmentForm";
import ProfilePage from "./pages/ProfilePage";
import PetPage from "./pages/PetPage";

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Header />
			<Features />
			<Services />
			<About />
			<Footer />
			<Routes>
				<Route exact path="/">
					<ProfilePage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/appointmentform">
					<AppointmentForm />
				</Route>
				<Route path="/profilepage">
					<profilePage />
				</Route>
				<Route path="/petpage">
					<PetPage />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
