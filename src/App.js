import Header from "./components/Header";
import Features from "./components/Features";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

import React from "react";
function App() {
	return (
		<div className="App">
			<Header />
			<Features />
			<Services />
			<About />
			<Footer />
		</div>
	);
}

export default App;
