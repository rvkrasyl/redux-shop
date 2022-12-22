const updateCartItem = (book, quantity, item = {}) => {
    const { 
        id = book.id, 
        count = 0, 
        title = book.title, 
        total = 0 } = item;
    
    return {
        id,
        title,
        count: Number(count) + Number(quantity),
        total: Number(total) + Number(quantity) * Number(book.price)
    }
};
const updateCartItems = (cartItems, newItem, idx) =>  {
    if (idx === -1) {
        return [
            ...cartItems,
            newItem
        ]
    }

    if (newItem.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        newItem,
        ...cartItems.slice(idx + 1)
    ]
};
const updateOrder = (state, bookId, quantity) => {
    const book = state.bookList.books.find(({ id }) => id === bookId);
            
    const cartItemFromState = state.shoppingCart.cartItems.find(({ id }) => id === bookId);
    const cartItemFromStateIndex = state.shoppingCart.cartItems.findIndex(({ id }) => id === bookId);

    const newItem = updateCartItem(book, quantity, cartItemFromState);
            
    return {
        cartItems: updateCartItems(state.shoppingCart.cartItems, newItem, cartItemFromStateIndex),
        orderTotal: Number(state.shoppingCart.orderTotal) + Number(quantity) * Number(book.price)
    };        
};
const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    };
    switch (action.type) {
        case "BOOK_ADDED_TO_CART" : {
            return updateOrder(state, action.payload, 1);
        }
        case "BOOK_REMOVED_FROM_CART" : {
            return updateOrder(state, action.payload, -1);
        }
        case "ALL_BOOKS_REMOVED_FROM_CART" : {
            const cartItemFromState = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);  
            return updateOrder(state, action.payload, -cartItemFromState.count);
        }
        default :
            return state.shoppingCart;
    }
};

export default updateShoppingCart;