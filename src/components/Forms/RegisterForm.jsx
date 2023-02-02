import React from "react";
import Field from "../Field";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <form className="register__form">
            <h3 className="title">Register Form</h3>
            <Field
                name={"name"}
                type={"text"}
                message={"Username"}
                placeholder={"Enter your username"}
            />
            <Field
                name={"email"}
                type={"text"}
                message={"Email"}
                placeholder={"Enter your email"}
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

export default RegisterForm;
