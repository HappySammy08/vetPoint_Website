import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

/* Pages */
import LoginPage from "./pages/LoginPage";
import AppointmentForm from "./pages/AppointmentForm";
import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";

import "./css/home.css";

import React, { useRef } from "react";

import { Route, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
	const featuresRef = useRef(null);
	const aboutRef = useRef(null);
	const serviceRef = useRef(null);

	return (
		<div className="App">
			<div>
				<Navigation refs={{ aboutRef, serviceRef, featuresRef }} />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Homepage
								ref={{ ref1: featuresRef, ref2: aboutRef, ref3: serviceRef }}
							/>
						}
					></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/appointmentform" element={<AppointmentForm />}></Route>
					<Route path="/profile" element={<ProfilePage />}></Route>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
