import React from "react";
import Header from "../components/Header";
import { useEffect } from "react";

const LandingPage = () => {
	useEffect(()=> {
		document.title = "MALA || Home"
	},[])
    return (
        <div>
            <Header />
            <h1 className="title">Welcome to MALA</h1>
        </div>
    );
};

export default LandingPage;
