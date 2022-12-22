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
			<div>
				<nav>
					<ul id="navigation">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Routes>
				<Route exact path="/">
					<LoginPage />
				</Route>
				<Route path="/about">
					<ProfilePage />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
