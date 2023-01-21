import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">
                Home
            </Link>

            <Link to="/profile" className="link">
                Profile
            </Link>
        </nav>
    );
};

export default Navbar;
