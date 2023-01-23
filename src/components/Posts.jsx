import React, { useEffect, useState } from "react";
import Header from "./Header";

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
    return (
        <div>
            <Header />
            <div className="post__container">
                {posts.slice(0, 20).map((post, i) => (
                    <div key={i} className="post">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
