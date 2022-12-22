import React from "react";
import { connect } from "react-redux";
import { bookAddedToCart, bookRemovedFromCart, allBooksemovedFromCart } from "../../actions";
import ShoppingCartTable from "../../components/shopping-cart-table";

const ShoppingCartTableContainer = ({ items, total,
        onIncrease, onDecrease, onDelete }) => {
    return <ShoppingCartTable 
                items={items} 
                total={total}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDelete={onDelete}
            />;
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer);
