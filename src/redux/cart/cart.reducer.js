import { TOGGLE_CART_HIDDEN } from './cart.types';

const INITIAL_STATE = {
    hidden: true
};

export default (state = INITIAL_STATE, { type }) => {
    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}