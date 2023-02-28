import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoomPage from "../pages/RoomPage/RoomPage";
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
						<Route path="/" element={ <RoomPage/> } />
					</Routes>
				</BrowserRouter>
			</PageNavigationProvider>
		</UserProvider>
	);
}
