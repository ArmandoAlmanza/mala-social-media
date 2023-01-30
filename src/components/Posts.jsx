import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.svg";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

const getData = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/posts/").then(
        (res) => res.json()
    );
};

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getData().then((data) => {
            setPosts(data);
        });
    }, []);

    const names = [
        "Armando Almanza",
        "Mariana Alejandra",
        "Sergio Cholula",
        "Ivan Espiritu Santo",
        "Bernardo Sanchez",
    ];

    return (
        <div className="post__container">
            {posts.slice(0, 20).map((post, i) => (
                <article key={i} className="post">
                    <Link to={"/post/" + post.id}>
                        {post.title}
                    </Link>
                    <p>{post.body}</p>
                    <article className="post__info">
                        <img src={avatar} alt="avatar image" />
                        <p>
                            Writen by{" "}
                            {names[Math.floor(Math.random() * names.length)]}{" "}
                        </p>
                        <LikeButton id={post.id} />
                    </article>
                </article>
            ))}
        </div>
    );
};

export default Posts;
