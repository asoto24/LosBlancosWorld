/**
 * The following imports allow bootstrap to work with our React project,
 * one is to display the css, and the other is for the js functionality.
 */
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/madrid_logo.png'; // Path to your logo image
import { useNavigate } from 'react-router-dom';
import '../stylesheets/navbar.css'


/**
 * This component represents the banner of the page inside the navigation bar.
 * This contains the buttons to sign-in and sign-up as well as the logo and title of
 * the website.
 * @returns Banner of the page.
 */
const Banner = () =>{
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup'); // Navigate to the "signup" route
    };

    const handleSignInClick = () => {
        navigate('/signin'); // Navigate to the "signin" route
    };
    return(<div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="inner-banner-container">
            <img src={logo} alt="logo" className="logo-image"/>
            <div className="space-center website-title">Los Blancos World</div>
            <div className="inner-banner-container-buttons">
                <button type="button" className="btn blue-bg btn-lg" onClick={handleSignUpClick}>Sign Up</button>
                <button type="button" className="btn blue-bg btn-lg" onClick={handleSignInClick}>Sign In</button>
            </div>
        </div>
    </div>)
}
/**
 * This component represents the navigation bar of the website
 * The navigation bar option will change depending on the current
 * status of the user, logged in or not.
 */
const Navbar = () =>{
    return (<>
            <Banner/>
            <nav className="navbar navbar-dark blue-bg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>)
}
export default Navbar;