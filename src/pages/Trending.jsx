import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts"
import PostForm from "../components/Forms/PostForm";

const Trending = () => {
    return (
        <>
            <Header />
            <div>
                <h1 className="title">Trending posts</h1>
                <PostForm />
				<div className="profile__posts">
                    <Posts />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Trending;
