import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header">
            <Link className="link" to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link className="link" to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa-solid fa-cart-shopping" />
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    );
}

export default ShopHeader;