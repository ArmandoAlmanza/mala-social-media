import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LikeButton from "./LikeButton";
import { getPost } from "../api/axiosReponse";

const SimglePost = () => {
    const { postId } = useParams();

    const [post, setPosts] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getPost(postId).then((data) => {
                setPosts(data.data);
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
                    <div className="post__container  single__post">
                        <div className="post">
                            <h1>Titulo generico</h1>
                            <p>{post.body}</p>
                            <article className="post__info">
                                <img
                                    src={
                                        "https://api.dicebear.com/5.x/adventurer/svg?seed=" +
                                        names[
                                            Math.floor(
                                                Math.random() * names.length
                                            )
                                        ]
                                    }
                                    alt="avatar image"
                                />
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
