import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";

import "./app.css";

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Routes>
                <Route path = "/" element = {<HomePage />} />
                <Route path = "/cart" element = {<CartPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;