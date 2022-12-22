import { act } from "react-dom/test-utils";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

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
    const book = state.books.find(({ id }) => id === bookId);
            
    const cartItemFromState = state.cartItems.find(({ id }) => id === bookId);
    const cartItemFromStateIndex = state.cartItems.findIndex(({ id }) => id === bookId);

    const newItem = updateCartItem(book, quantity, cartItemFromState);
            
    return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, cartItemFromStateIndex),
        orderTotal: Number(state.orderTotal) + Number(quantity) * Number(book.price)
    };        
};

const reducer = (state = initialState, action) => {   
    switch (action.type) {
        case "FETCH_BOOKS_REQUEST" : {
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        };
        case "FETCH_BOOKS_SUCCESS" : {
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        };
        case "FETCH_BOOKS_FAILURE" : {
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        };
        case "BOOK_ADDED_TO_CART" : {
            return updateOrder(state, action.payload, 1);
        };
        case "BOOK_REMOVED_FROM_CART" : {
            return updateOrder(state, action.payload, -1);
        };
        case "ALL_BOOKS_REMOVED_FROM_CART" : {
            const cartItemFromState = state.cartItems.find(({ id }) => id === action.payload);  
            return updateOrder(state, action.payload, -cartItemFromState.count);
        };
        default: 
            return state;
    }
}

export default reducer;