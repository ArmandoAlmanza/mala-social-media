import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";
import Posts from "../components/Posts";
import SinglePost from "../components/SimglePost";
import Friends from "../pages/Friends";
import Trending from "../pages/Trending";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post/:postId" element={<SinglePost />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/trending" element={<Trending />} />
            </Routes>
        </BrowserRouter>
    );
};
