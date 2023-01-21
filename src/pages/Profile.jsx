import React, { useEffect } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Profile = () => {
    let query = useQuery();
    useEffect(() => {
        document.title = "MALA || Profile";
    }, []);

    return (
        <div>
            <Header />
            <h1>Welcome to {query.get("name")} profile</h1>
        </div>
    );
};

export default Profile;
