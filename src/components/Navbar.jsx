import '../styles/navbar.css'
import { useContext } from 'react';
import { faBars } from '@fortawesome/free-solic-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lin, useNavigate } from "react-router-dom"
import { AuthContext } from "../authContext"


const Navbar = () => {

    const navigate = useNavigate()

    const { user, dispatch } = useContext(AuthContext)
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        navigate("/")
    }

    return (
        <div className='navContainer'>
            <link to="/">
                <p className='navLogo'>CRM Portal</p>
            </link>

            <input type="checkbox" id='menu-bar' />
            <label htmlFor="menu-bar">
                <FontAwesomeIcon 
                    icon={faBars}
                    className="icon" />
            </label>
            <nav className='navbar'>
                <ul>
                    <link to="/create">
                        <li><p>Add Customers</p></li>
                    </link>
                    <link to="/">
                        <li><p>All Customers</p></li>
                    </link>
                    {user ? (<>
                    
                        <link to={`/user/${user._id}`}>
                            <li onClick={handleClick}
                                style={{ cursor: "pointer" }}>
                                <p>Logout</p>
                            </li>
                            <li id="username"><p>{user.username}</p></li>
                        </link>
                    </>
                    ) : 
                        (
                            <>
                                <link to="/register">
                                    <li><p>Register</p></li>
                                </link>
                                <link to="/login">
                                    <li><p>Login</p></li>
                                </link>
                            </>
                        )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar