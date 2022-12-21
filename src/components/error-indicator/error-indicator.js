import React from "react";

import "./error-indicator.css";

const ErrorIndicator = ({ err }) => {
    return (
    <div>Error! {err.message}</div>
    );
}

export default ErrorIndicator;