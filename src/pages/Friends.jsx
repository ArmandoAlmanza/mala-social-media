import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Friend from "../components/Friend";

const Friends = () => {
    useEffect(() => {
        document.title = "MALA || Profile";
    }, []);

    return (
        <>
            <Header />
            <div>
                <h1 className="title">Welcome to friends</h1>
                <div className="friends__container">
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Friends;
