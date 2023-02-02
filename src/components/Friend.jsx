import React from "react";
import {
    FaMapMarker,
    FaBirthdayCake,
    FaRegComment,
    FaUser,
} from "react-icons/fa";
const Friend = () => {
    const names = [
        "Armando Almanza",
        "Mariana Alejandra",
        "Sergio Cholula",
        "Ivan Espiritu Santo",
        "Bernardo Sanchez",
    ];
    const profile = {
        birthday: "31/05/2000",
        location: "Cuautitlán Estado de México",
        phrase: "You are the love of my life. Everything I have and everything I am is yours. Forever.",
    };
    return (
        <article className="friend">
            <img
                src={
                    "https://api.dicebear.com/5.x/adventurer/svg?seed=" +
                    names[Math.floor(Math.random() * names.length)]
                }
                alt="avatar image"
            />
            <div className="friend__info__container">
                <p className="friend__info">
                    <span>
                        <FaUser />
                    </span>
                    {names[Math.floor(Math.random() * names.length)]}{" "}
                </p>

                <p className="friend__info">
                    <span>
                        {" "}
                        <FaBirthdayCake />
                    </span>
                    {profile.birthday}
                </p>

                <p className="friend__info">
                    <span>
                        <FaMapMarker />
                    </span>
                    {profile.location}
                </p>

                <p className="friend__info">
                    <span>
                        <FaRegComment />
                    </span>
                    {profile.phrase}
                </p>
            </div>
        </article>
    );
};

export default Friend;
