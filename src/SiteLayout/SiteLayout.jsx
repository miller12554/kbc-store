import {  Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import Navbar from "../components/Navbar";

export default function RootLayout() {
	return (
		<div className="root-layout ">
			<header><Navbar /></header>
			<main className="mt-6 mr-3 ml-3">
				
				<Outlet />
			</main>
		</div>
	);
}
