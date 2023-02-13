import { useState, useEffect } from "react";
import { getPost, updateLike } from "../api/axiosReponse";
const LikeButton = ({ id }) => {
    const [like, setLike] = useState(false);
    const [post, setPosts] = useState({});

    useEffect(() => {
        getPost(id).then((data) => {
            setPosts(data.data);
            setLike(data.data.liked);
        });
    }, []);
    return (
        <button
            className="btn"
            onClick={() => {
                setLike(!post.liked);
                updateLike(id);
            }}
        >
            {like ? "❤" : "🤍"}
        </button>
    );
};
export default LikeButton;
