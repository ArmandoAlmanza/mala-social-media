import React, { useEffect, useState } from "react";
import Header from "./Header";
import avatar from "../assets/avatar.svg";

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
    const date = new Date();
    const today =
        date.getDay() +
        " - " +
        (date.getMonth() + 1) +
        " - " +
        date.getFullYear();
    return (
        <div>
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
                                        Math.floor(Math.random() * names.length)
                                    ]
                                }{" "}
                            </p>
                            <small>Written date {today}</small>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
