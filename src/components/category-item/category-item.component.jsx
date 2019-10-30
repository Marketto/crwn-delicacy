import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { updateItem } from '../../redux/cart/cart.actions';

import './category-item.style.scss';

const CategoryItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='category-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${ imageUrl })`
                }}
            />
            <div className='category-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price.toFixed(2) }</span>
            </div>
            <CustomButton className='inverted' onClick={ () => addItem(item) }>
                Order
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(updateItem(item))
});

export default connect(null, mapDispatchToProps)(CategoryItem);