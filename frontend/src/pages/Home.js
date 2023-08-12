import Navbar from "../components/Navbar";
import Background from "../components/Background";
import "../stylesheets/home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="content-container">
                <Background />
            </div>
        </div>
    );
};

export default Home;
