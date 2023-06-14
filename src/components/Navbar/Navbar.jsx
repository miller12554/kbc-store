import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation, useNavigate, Link,  } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import Dropdead from "./Dropdead";
import { UserAuth } from '../../context/AuthContext';
// import { user } from '../../context/AuthContext';

const logOutter = async () => {
		await auth.signOut().then(console.log("signed out."));
	};


const Navbar = () => {
	
	
	function onLogout() {
    auth.signOut();
    navigate("/sign-in");
  }
	
	
	

	const logOut = async () => {
		await auth.signOut().then(console.log("signed out."));
	};

	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(logout);
  }

	const [pageState, setPageState] = useState("");
	const [pageState1, setPageState1] = useState(" ");
	const location = useLocation();
	const navigate = useNavigate();
	const auth = getAuth();
	const user  = getAuth()
	useEffect(() => {
		 
    onAuthStateChanged(auth, (user) => {
		if (user === user) {
			setPageState("Log Out")

			if (!user) {
				setPageState("sign in")
			}

	
			
			
	  }
    });
  }, []);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
		


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
					<li className="p-4">
						<NavLink className="text-green-500" to="/sign-in">
							Account
						</NavLink>
					</li>
					{/* <li className="my-auto">
						<Dropdead />
					</li> */}
				</ul>
			</div>

	
                            
			<div className="mr-8">
				 <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/account") || pathMatchRoute("/account")) 
              
              }`}
						onClick={() => navigate("/sign-in")}
			 			
						
            >
             {pageState} 
             {pageState1} 
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
					{/* <NavLink to="/account">Account</NavLink> */}
				</li>
			</ul>
		</div>
	);
};

export default (Navbar);
