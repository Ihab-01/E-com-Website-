import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const loadState = () => {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return { cart: JSON.parse(serializedState) };
};

const saveState = (state) => {
        const serializedState = JSON.stringify(state.cart);
        localStorage.setItem('cartState', serializedState);
};

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;