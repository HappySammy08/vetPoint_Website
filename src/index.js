import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import AppointmentForm from "./pages/AppointmentForm";
import ProfilePage from "./pages/ProfilePage";
import PetPage from "./pages/PetPage";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/appointmentForm",
		element: <AppointmentForm />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/profilepage",
		element: <ProfilePage />,
	},
	{
		path: "/petpage",
		element: <PetPage />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// {
// 	/* <React.StrictMode>
// 		<App />
// 	</React.StrictMode> */
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
