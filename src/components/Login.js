import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/login_page/login_bg.png";
import logo from "../img/logo_withColor.png";
import cat_bg from "../img/login_page/cat_bg.png";
import dog_bg from "../img/login_page/dog_bg.png";

const Login = () => {
	return (
		<div className="loginWrapper" style={{ backgroundImage: `url(${bg})` }}>
			<div
				className="dog_bg"
				style={{ backgroundImage: `url(${dog_bg})` }}
			></div>

			<div className="loginForm">
				<div className="login_webName">
					<b>VetPoint</b> <br />
					<span>
						{" "}
						<b>CVMBS Animal Clinic </b>
					</span>
				</div>
				<div className="login_logo">
					{" "}
					<img src={logo} alt="VetPoint_Logo" />
				</div>
				<div className="loginFormWrapper">
					<b>Sign In</b>
					<form>
						<input
							type="email"
							className="email_login"
							placeholder="Email"
						></input>
						<input
							type="password"
							className="password_login"
							placeholder="Password"
						></input>

						<Link to="/profile">
							<button type="submit">Sign in</button>
						</Link>
					</form>
				</div>
			</div>
			<div
				className="cat_bg"
				style={{ backgroundImage: `url(${cat_bg})` }}
			></div>
		</div>
	);
};

export default Login;
