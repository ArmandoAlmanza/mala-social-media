import React from "react";
import login from "../assets/login_image.png";
import { useEffect, useState } from "react";
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm";

const LandingPage = () => {
    const [form, setForm] = useState(true);

    useEffect(() => {
        document.title = "MALA || Home";
    }, []);
    return (
        <div className="login__container">
            <div className="login__img">
                <img src={login} alt="Login image" />
            </div>
            <div>
                <div className="btns__form">
                    <button
                        className="btn__opt"
                        onClick={() => setForm(true)}
                    >
                        Login
                    </button>
                    <button
                        className="btn__opt"
                        onClick={() => setForm(false)}
                    >
                        Register
                    </button>
                </div>

                {form ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
};

export default LandingPage;
