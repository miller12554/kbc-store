import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import Dropdead from "./Dropdead";

const Navbar = () => {
	
	const [liked, setLiked] = useState(false);

	
	
	

	const logOut = async () => {
		await auth.signOut().then(console.log("signed out."));
	};

	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const [pageState, setPageState] = useState("Sign in");
	const location = useLocation();
	const navigate = useNavigate();
	const auth = getAuth();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setPageState("You are signed in");
			} else {
				setPageState("Sign in");
			}
		});
	}, [auth]);
	function pathMatchRoute(route) {
		if (route === location.pathname) {
			return true;
		}
	}

	return (
		<div className="flex justify-between items-center h-14 w-full mx-auto px-4 bg-black text-white">
			<div className="">
				<div className="w-full text-3xl font-bold text-green-500">
					Wanted Today
				</div>
			</div>
			<div className="">
				<ul className="hidden md:flex">
					<li className="p-4">
						<NavLink className="text-green-500" to="/">
							Home
						</NavLink>
					</li>
					<li className="p-4">
						<NavLink className="text-green-500" to="/profile">
							Profile
						</NavLink>
					</li>
					<li className="p-4">
						<NavLink className="text-green-500" to="/account">
							Account
						</NavLink>
					</li>
					<li className="my-auto">
						<Dropdead />
					</li>
				</ul>
			</div>
			<div className="mr-8">
				<ul className="hidden md:flex space-x-5 text-yellow-500 text-xs">
				
						<li
							className={`cursor-pointer  ${
								(pathMatchRoute("/login") || pathMatchRoute("/account")) &&
								"text-red-500 border-b-red-500"
							}`}
							onClick={() => navigate("/login")}
							
						>
						{pageState}
						
						</li>
					
						
					
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
				</ul>
			</div>
			<div onClick={handleNav} className="block md:hidden ">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<ul
				className={
					nav
						? "fixed left-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
						: "ease-in-out duration-500 fixed left-[-100%]"
				}
			>
				<li className="p-4">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="p-4">
					<NavLink to="/account">Account</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
