import React from "react";
import login from "../assets/login_image.png";
import { useEffect } from "react";
import Field from "../components/Field";
import { Link } from "react-router-dom";

const LandingPage = () => {
    useEffect(() => {
        document.title = "MALA || Home";
    }, []);
    return (
        <div className="login__container">
            <div className="login__img">
                <img src={login} alt="Login image" />
            </div>
            <form className="login__form">
                <Field
                    name={"email"}
                    type={"text"}
                    message={"Email or Username"}
                    placeholder={"Enter your username or email"}
                />
                  <Field
                    name={"password"}
                    type={"password"}
                    message={"Enter your password"}
                    placeholder={"Enter your password"}
                />
                <Link className="btn__login" to={"/profile"} >Login</Link>
            </form>
        </div>
    );
};

export default LandingPage;
