import React from "react";
import Field from "../Field";
import { Link } from "react-router-dom";


const LoginForm = () => {
    return (
        <form className="login__form">
			<h3>Login Forms</h3>
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
            <Link className="btn__login" to={"/profile"}>
                Login
            </Link>
        </form>
    );
};

export default LoginForm;
