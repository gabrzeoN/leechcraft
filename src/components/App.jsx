import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import HomePage from "../pages/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute";
import { UserProvider } from "../contexts/UserContext";
import { PageNavigationProvider } from "../contexts/PageNavigationContext";
import "./../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
	return (
		<UserProvider>
			<PageNavigationProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/sign-up/customers" element={<SignUpPage user={"customers"} />} />
						<Route path="/sign-up/professionals" element={<SignUpPage user={"professionals"}/>} />
						<Route path="/sign-in/customers" element={<SignInPage user={"customers"} />} />
						<Route path="/sign-in/professionals" element={<SignInPage user={"professionals"}/>} />
						<Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
					</Routes>
				</BrowserRouter>
			</PageNavigationProvider>
		</UserProvider>
	);
}
