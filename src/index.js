import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import AppointmentForm from "./pages/AppointmentForm";
import ProfilePage from "./pages/ProfilePage";
import PetPage from "./pages/PetPage";

import { BrowserRouter, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Route path="/" component={App} />
		<Route path="/login" component={LoginPage} />
		<Route path="/appointmentForm" component={AppointmentForm} />
		<Route path="/profilePage" component={ProfilePage} />
		<Route path="/petpage" component={PetPage} />
	</BrowserRouter>
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 	},
// 	{
// 		path: "/appointmentForm",
// 		element: <AppointmentForm />,
// 	},
// 	{
// 		path: "/login",
// 		element: <LoginPage />,
// 	},
// 	{
// 		path: "/profilepage",
// 		element: <ProfilePage />,
// 	},
// 	{
// 		path: "/petpage",
// 		element: <PetPage />,
// 	},
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
