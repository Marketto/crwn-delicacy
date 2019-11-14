import { createSelector } from 'reselect';
import { selectAllProducts } from '../catalog/catalog.selectors';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart, selectAllProducts],
    (cart, products) => {
        const cartIds = cart.cartItems.map(({ id }) => id);
        const cartProducts = products.filter(({ id }) => cartIds.includes(id));
        return cartProducts.map(product => ({
            ...product,
            ...cart.cartItems[cartIds.indexOf(product.id)]
        }));
    }
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => (cartItems || []).reduce((count, { quantity }) => count + quantity, 0) 
);

export const selectCartTotalAmount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((sum, { quantity, price }) => sum + price * quantity, 0) 
);