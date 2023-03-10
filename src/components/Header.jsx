import Navbar from "./Navbar";
import avatar from "../assets/avatar.svg";

const showMessage = () => {
    alert("you are logged");
};

const Header = () => {
    return (
        <header className="site__header">
            <div>
                <h1 className="logo">
                    MALA <span>Social media</span>
                </h1>
            </div>
            <Navbar />
            <div className="profile__header" onClick={showMessage}>
                <img
                    className="avatar__header"
                    src={avatar}
                    alt="Avatar picture"
                />
                <h1>Arandano Depresivo</h1>
            </div>
        </header>
    );
};

export default Header;
