import React, { useState } from "react";
import { newPost } from "../../api/axiosReponse";

const PostForm = () => {
    const names = [
        "Armando Almanza",
        "Mariana Alejandra",
        "Sergio Cholula",
        "Ivan Espiritu Santo",
        "Bernardo Sanchez",
    ];

    const [post, setPost] = useState({
        body: "Just a sample description",
        user: "Armando Almanza",
    });

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        setPost({
            ...post,
            user: names[Math.floor(Math.random() * names.length)],
        });
        try {
            newPost(post);
        } catch (error) {
            console.log("hubo un error" + error);
        }
    };
    return (
        <form className="newpost__container">
            <textarea
                name="body"
                placeholder="max lenght 240 chars"
                className="textarea"
                maxLength={240}
                onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit} className="btn btn__add">
                Add New post
            </button>
        </form>
    );
};

export default PostForm;
