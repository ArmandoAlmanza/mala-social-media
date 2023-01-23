import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";
import Posts from "../components/Posts";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    );
};
