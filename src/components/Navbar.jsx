import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [
        {
            to: "/",
            name: "Home",
        },
        {
            to: "/profile",
            name: "Profile",
        },

        {
            to: "/post",
            name: "Post",
        },

        {
            to: "/",
            name: "Friends",
        },
        {
            to: "/",
            name: "Trending",
        },
    ];

    return (
        <nav className="navbar">
            <Link to={"/profile?name=Armando Almanza"} className="link">
                Profile Armando
            </Link>
            {links.map((anchor, i) => {
                return (
                    <Link to={anchor.to} className="link" key={i}>
                        {anchor.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
