import React, { useEffect } from "react";
import Header from "../components/Header";

const Profile = () => {
    useEffect(() => {
        document.title = "MALA || Profile";
    }, []);

    return (
        <div>
            <Header />
            <h1>Welcome to my profile</h1>
        </div>
    );
};

export default Profile;
