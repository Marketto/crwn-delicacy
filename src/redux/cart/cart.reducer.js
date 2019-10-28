import { TOGGLE_CART_HIDDEN, UPDATE_ITEM } from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case UPDATE_ITEM:
            const { cartItems } = state;
            const targetItem = cartItems.find(({ id }) => id === payload.id);
            if (targetItem){
                targetItem.quantity += payload.quantity;
                if (cartItems.quantity < 1) {
                    cartItems.splice(cartItems.indexOf(targetItem), 1);
                }
            } else if (payload.quantity) {
                cartItems.push(payload);
            }
            return {
                ...state,
                cartItems
            };
        default:
            return state;
    }
}