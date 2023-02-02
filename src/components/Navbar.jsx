import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [

        {
            to: "/profile",
            name: "Profile",
        },
        {
            to: "/friends",
            name: "Friends",
        },
        {
            to: "/trending",
            name: "Trending",
        },
    ];
    return (
        <nav className="navbar">
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
