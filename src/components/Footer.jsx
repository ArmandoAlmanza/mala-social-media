import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="site__footer">
            <div className="media">
                <h3>Armando Almanza social media</h3>
                <nav className="socials">
                    <a
                        href={"https://www.facebook.com/ArmyAlmanza/"}
                        target="_blank"
                    >
                        {" "}
                        <FaFacebook />
                    </a>
                    <a
                        href={"https://www.facebook.com/ArmyAlmanza/"}
                        target="_blank"
                    >
                        {" "}
                        <FaInstagram />
                    </a>
                    <a
                        href={"https://www.facebook.com/ArmyAlmanza/"}
                        target="_blank"
                    >
                        {" "}
                        <FaGithub />
                    </a>
                </nav>
            </div>
            <h1 className="diclaimer">
                This project is just for fun and improve our skills in
                programming, non of your data will use in bad way
            </h1>
            <div className="media">
                <h3>Mariana Alejandra social media</h3>
                <nav className="socials">
                    <a
                        href={"https://www.facebook.com/ana.mercado.716"}
                        target="_blank"
                    >
                        {" "}
                        <FaFacebook />
                    </a>
                    <a
                        href={"https://www.facebook.com/ana.mercado.716"}
                        target="_blank"
                    >
                        {" "}
                        <FaInstagram />
                    </a>
                    <a
                        href={"https://www.facebook.com/ana.mercado.716"}
                        target="_blank"
                    >
                        {" "}
                        <FaGithub />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
