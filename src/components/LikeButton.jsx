import { useState } from "react";

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
export default LikeButton;
