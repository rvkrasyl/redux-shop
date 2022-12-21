import React from "react";
import BookListContainer from "../../containers/book-list-container/book-list-container";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
    return (
        <div>
            <BookListContainer />
            <ShoppingCartTable />
        </div>
    );
}

export default HomePage;