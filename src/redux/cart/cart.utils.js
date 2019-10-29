export const updateCart = (cartItems = [], targetItem = {}) => {
    const { id, quantity } = targetItem;
    if (cartItems.some(({id}) => id === targetItem.id)) {
        return cartItems
            .map(item => (item.id === id ? {
                ...item,
                quantity: quantity + item.quantity
            } : item))
            .filter(({ quantity }) => quantity > 0);
    }
    const updatedCartList = [...cartItems];
    if (quantity > 0) {
        updatedCartList.push({ ...targetItem});
    }
    return updatedCartList;
};