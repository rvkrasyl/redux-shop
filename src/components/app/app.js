import React from "react";
import withBookstoreService from "../hoc";

import "./app.css";

const App = () => {
    return (
    <div>App</div>
    );
}

export default withBookstoreService()(App);