import React from "react";

const Field = ({ type, name, message, placeholder }) => {
    return (
        <div className="field">
            {" "}
            <input type={type} name={name} placeholder={placeholder} />
            <label htmlFor={name}>{message}</label>
        </div>
    );
};

export default Field;
