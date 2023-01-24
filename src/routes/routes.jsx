import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";
import Posts from "../components/Posts";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
