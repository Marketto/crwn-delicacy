import { TOGGLE_CART_HIDDEN, SET_CART_HIDDEN, UPDATE_ITEM } from './cart.types';
import { updateCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
    switch (type) {
        case SET_CART_HIDDEN:
            return {
                ...state,
                hidden: payload
            };
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case UPDATE_ITEM:
            return {
                ...state,
                cartItems: updateCart(state.cartItems, payload)
            };
        default:
            return state;
    }
}