import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, CartPage } from "../pages";

import "./app.css";

const App = () => {
    return (
        <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/cart" element = {<CartPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;