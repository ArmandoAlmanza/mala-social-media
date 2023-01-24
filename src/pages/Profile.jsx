import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
    let name = "";
    let apellido = ";";

    useEffect(() => {
        document.title = "MALA || Profile";
    }, []);

    return (
        <div>
            <h1>Welcome toprofile</h1>
        </div>
    );
};

export default Profile;
