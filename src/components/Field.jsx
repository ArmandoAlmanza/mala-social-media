import React from "react";

const Field = ({ type, name, message, placeholder }) => {
    return (
        <div className="field">
            {" "}
            <label htmlFor={name}>{message}:</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    );
};

export default Field;
