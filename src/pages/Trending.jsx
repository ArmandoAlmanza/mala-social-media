import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts"

const Trending = () => {
    return (
        <>
            <Header />
            <div>
                <h1 className="title">Trending page</h1>
				<div className="profile__posts">
                    <Posts />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Trending;
