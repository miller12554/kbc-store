import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation, useNavigate, Link,  } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import Dropdead from "./Dropdead";
import { UserAuth } from '../../context/AuthContext';
// import { user } from '../../context/AuthContext';



const Navbar = () => {
	
  const navigate = useNavigate();
  
	 
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	
  

	const [pageState, setPageState] = useState("");
	const [pageState11, setPageState11] = useState();
	const location = useLocation();
	const auth = getAuth();
	const user  = getAuth()
	useEffect(() => {
		 
		onAuthStateChanged(auth, (user) => {
		function onLogout() {
    auth.signOut();
    Navigate("/");
  }
		if (user === user) {
			setPageState("Log Out")
			
			
			if (!user) {
				setPageState("sign in")
			}
				if (user === user) { setPageState11(<div>{user?.displayName}</div>)}

			}
		

	});
		
  }, [auth]);
  
	function pathMatchRoute(route) {
		if (route === location.pathname) {
			return true;
		}
	}

	return (
	
		
		<div className=" h-16 max-h-16     bg-black ">
			
			<div className="flex max-w-[95vw] mx-auto  ">
				<div className="basis-3/12 ">
					<p className="text-2xl pt-1 text-green-500 inline-flex ">
					Wanted Today Store
					</p>
				
				</div>
				<div className="basis-4/12">
					<ul className="flex text-white space-x-10  mt-8">
					<li>Home</li>
					<li>Register</li>
					<li>LogOut</li>
					<li>Account</li>
					<li>Sign In</li>
					</ul>
				
				</div>
				<div className="basis-3/12 w-full bg-slate-950 flex flex-row-reverse max-h-8 mt-4 ">
					<div className="grid grid-cols-2  space-x-7 ml-auto text-xs text-yellow-500   ">
					<li className="m-auto">hello there</li> 
					<li className="m-auto">hello there</li> 
					<li className="m-auto">hello there</li> 
					<li className="m-auto">hello there</li> 
					</div>
				</div>
			
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
					{/* <NavLink to="/account">Account</NavLink> */}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
