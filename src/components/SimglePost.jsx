import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import avatar from "../assets/avatar.svg";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LikeButton from "./LikeButton";

const getData = async (id) => {
    return await fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(
        (res) => res.json()
    );
};

const SimglePost = () => {
    const { postId } = useParams();

    const [post, setPosts] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getData(postId).then((data) => {
                setPosts(data);
                setLoading(false);
            });
        }, 2000);
    }, []);

    const names = [
        "Armando Almanza",
        "Mariana Alejandra",
        "Sergio Cholula",
        "Ivan Espiritu Santo",
        "Bernardo Sanchez",
    ];

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Header />
                    <div className="post__container">
                        <div className="post">
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <article className="post__info">
                                <img src={avatar} alt="avatar image" />
                                <p>
                                    Writen by{" "}
                                    {
                                        names[
                                            Math.floor(
                                                Math.random() * names.length
                                            )
                                        ]
                                    }{" "}
                                </p>
                                <LikeButton id={post.id} />
                            </article>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default SimglePost;
