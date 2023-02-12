import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import { getPosts } from "../api/axiosReponse";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data.data);
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
                    <Link to={"/post/" + post.id}>Titulo generico</Link>
                    <small>Creation Date 01/02/2023</small>
                    <p>{post.body}</p>
                    <article className="post__info">
                        <img
                            src={
                                "https://api.dicebear.com/5.x/adventurer/svg?seed=" +
                                names[Math.floor(Math.random() * names.length)]
                            }
                            alt="avatar image"
                        />
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
