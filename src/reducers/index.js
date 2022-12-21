
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

const updateCartItem = (book, item = {}) => {
    const { 
        id = book.id, 
        count = 0, 
        title = book.title, 
        total = 0 } = item;
    
    return {
        id,
        title,
        count: count + 1,
        total: Number(total) + Number(book.price)
    }
};

const updateCartItems = (cartItems, newItem, idx) =>  {
    if (idx === -1) {
        return [
            ...cartItems,
            newItem
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        newItem,
        ...cartItems.slice(idx + 1)
    ]
};

const reducer = (state = initialState, action) => {   
    switch (action.type) {
        case "FETCH_BOOKS_REQUEST" :
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case "FETCH_BOOKS_SUCCESS" : 
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_BOOKS_FAILURE" :
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case "BOOK_ADDED_TO_CART" :
            const bookId = action.payload;
            const book = state.books.find(({ id }) => id === bookId);
            
            const cartItemFromState = state.cartItems.find(({ id }) => id === bookId);
            const cartItemFromStateIndex = state.cartItems.findIndex(({ id }) => id === bookId);

            const newItem = updateCartItem(book, cartItemFromState);
            
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem,cartItemFromStateIndex),
                orderTotal: Number(state.orderTotal) + Number(book.price)
            };
            
        default: 
            return state;
    }
}

export default reducer;