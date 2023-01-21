import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};
