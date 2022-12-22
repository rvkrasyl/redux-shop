import React from "react";
import BookListContainer from "../../containers/book-list-container";
import ShoppingCartTableContainer from "../../containers/shopping-cart-table-container";

const HomePage = () => {
    return (
        <div>
            <BookListContainer />
            <ShoppingCartTableContainer />
        </div>
    );
}

export default HomePage;