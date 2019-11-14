import { SET_CART_HIDDEN, TOGGLE_CART_HIDDEN, UPDATE_ITEM } from './cart.types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const setCartHidden = (hide = true) => ({
    type: SET_CART_HIDDEN,
    payload: hide
});

export const updateItem = (item, quantity = 1) => ({
    type: UPDATE_ITEM,
    payload: {
        id: item.id,
        quantity
    }
});