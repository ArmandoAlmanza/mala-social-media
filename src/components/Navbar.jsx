import { Link } from "react-router-dom";

const Navbar = () => {
    const links = ["home", "profile", "posts", "friends", "trending"];

    return (
        <nav className="navbar">
            <Link to={"/profile?name=Armando Almanza"} className="link">
                Profile Armando
            </Link>
            {links.map((anchor, i) => {
                return (
                    <Link to={"/" + anchor} className="link" key={i}>
                        {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
