import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth, signInWithGoogle } from '../Firebase';

const Navbar = () => {

    // To get a state of addItems, use name of the file not the function
    const state = useSelector((state) => state.addItem);

    const logOut = async () => {
        await auth.signOut().then(console.log("signed out."));
        localStorage.clear(auth);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">DUST</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">PRODUCTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            {localStorage.getItem("name")  ? (
                                    <button className="btn btn-outline-dark ms-3" onClick={signInWithGoogle}>
                                        <i className='fa fa-sign-in me-1'></i> LOGIN
                                    </button>
                                ) : (
                                    <>
                                        <div className='container'>
                                            <NavLink to="/cart" className="btn btn-outline-dark ms-2 me-5">
                                                <i className='fa fa-shopping-cart me-1'></i>
                                                {state?.length}
                                            </NavLink>
                                            <h4 className="lead">{localStorage.getItem("name")}</h4>
                                            <img src={localStorage.getItem("profilePic")} alt="Profile" className='img-fluid img-responsive rounded-circle ms-2' style={{ height:50, width:50 }} />
                                            <button className="btn btn-outline-dark ms-5" onClick={logOut}> {/*localstorage clear*/}
                                                <i className='fa fa-sign-out me-1'></i> LOGOUT 
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;



						onClick={() => navigate("/login") => {setButtonShow(a); setShow(b)}}
