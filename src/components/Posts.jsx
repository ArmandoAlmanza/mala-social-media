import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import avatar from "../assets/avatar.svg";

const getData = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/posts/").then(
        (res) => res.json()
    );
};

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getData().then((data) => {
                setPosts(data);
                setLoading(false);
            });
        }, 5000);
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
                <div className="post__container">
                    {posts.slice(0, 20).map((post, i) => (
                        <div key={i} className="post">
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
                                <LikeButton id={i} />
                            </article>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const LikeButton = ({ id }) => {
    const [like, setLike] = useState(false);
    return (
        <button
            className="btn"
            onClick={() => {
                setLike(!like);
            }}
        >
            {like ? "❤" : "🤍"}
        </button>
    );
};

export default Posts;
