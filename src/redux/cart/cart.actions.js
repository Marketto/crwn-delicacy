import { TOGGLE_CART_HIDDEN, UPDATE_ITEM } from './cart.types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const updateItem = (item, quantity = 1) => ({
    type: UPDATE_ITEM,
    payload: {
        ...item,
        quantity
    }
});