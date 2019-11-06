import React from 'react';
import { connect } from 'react-redux';

import { updateItem } from '../../redux/cart/cart.actions';

import {
    CategoryItemContainer,
    BackgroundImage,
    CategoryFooterContainer,
    NameContainer,
    PriceContainer,
    OrderButton
} from './category-item.style';

const CategoryItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CategoryItemContainer>
            <BackgroundImage imageUrl={ imageUrl } />
            <CategoryFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>{ price.toFixed(2) }</PriceContainer>
            </CategoryFooterContainer>
            <OrderButton className='inverted' onClick={ () => addItem(item) }>
                Order
            </OrderButton>
        </CategoryItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(updateItem(item))
});

export default connect(null, mapDispatchToProps)(CategoryItem);