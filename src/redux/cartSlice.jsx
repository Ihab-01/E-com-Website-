import { createSlice } from '@reduxjs/toolkit';

// Function to load the saved cart from localStorage
const loadCartFromStorage = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return { products: [], totalQuantity: 0, totalPrice: 0 };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return { products: [], totalQuantity: 0, totalPrice: 0 };
    }
};

// Function to save the cart to localStorage
const saveCartToStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        // Ignore write errors
    }
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            const itemIndex = state.products.find((item)=> item.id === newItem.id);
            if(itemIndex){
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price;
            }else{
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
            saveCartToStorage(state); // Save immediately after change
        },
        removeFromCart(state, action){
            const newId = action.payload;
            const findItem = state.products.find((item)=> item.id === newId);
            if(findItem){
                state.totalPrice -= findItem.totalPrice;
                state.totalQuantity -= findItem.quantity;
                state.products = state.products.filter(item => item.id !== newId);
                saveCartToStorage(state);
            }
        },
        increaseQuantity(state, action){
            const newId = action.payload;
            const findItem = state.products.find((item)=> item.id === newId);
            if(findItem){
                findItem.quantity ++;
                findItem.totalPrice += findItem.price;
                state.totalQuantity ++;
                state.totalPrice += findItem.price;
                saveCartToStorage(state);
            }
        },
        decreaseQuantity(state, action){
            const newId = action.payload;
            const findItem = state.products.find((item)=> item.id === newId);
            if(findItem){
                if(findItem.quantity > 1){
                    findItem.quantity --;
                    findItem.totalPrice -= findItem.price;
                    state.totalQuantity --;
                    state.totalPrice -= findItem.price;
                } else {
                    state.totalPrice -= findItem.totalPrice;
                    state.totalQuantity -= findItem.quantity;
                    state.products = state.products.filter(item => item.id !== newId);
                }
                saveCartToStorage(state);
            }
        }
    },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;