import React, { useEffect } from "react";
import {
    FaMapMarker,
    FaBirthdayCake,
    FaRegComment,
    FaUser,
} from "react-icons/fa";
import Posts from "../components/Posts";
import avatar from "../assets/avatar.svg";

const Profile = () => {
    useEffect(() => {
        document.title = "MALA || Profile";
    }, []);

    const profile = {
        name: "Luis Armando Sanchez Almanza",
        birthday: "31/05/2000",
        location: "Cuautitlán Estado de México",
        phrase: "You are the love of my life. Everything I have and everything I am is yours. Forever.",
    };

    return (
        <div className="profile__container">
            <div className="profile__info">
                <h1 className="title">Armando Almanza Profile</h1>
                <img src={avatar} alt="avatar image" />
                <div className="profile__data__container">
                    <p className="profile__data">
                        <span>
                            <FaUser />
                        </span>
                        {profile.name}
                    </p>

                    <p className="profile__data">
                        <span>
                            {" "}
                            <FaBirthdayCake />
                        </span>
                        {profile.birthday}
                    </p>

                    <p className="profile__data">
                        <span>
                            <FaMapMarker />
                        </span>
                        {profile.location}
                    </p>

                    <p className="profile__data">
                        <span>
                            <FaRegComment />
                        </span>
                        {profile.phrase}
                    </p>
                </div>
            </div>
            <div className="profile__posts">
                <Posts />
            </div>
        </div>
    );
};

export default Profile;
