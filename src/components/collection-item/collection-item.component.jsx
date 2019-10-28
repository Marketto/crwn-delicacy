import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { updateItem } from '../../redux/cart/cart.actions';

import './collection-item.style.scss';

const CollectionItem = ({ item, addItem }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price.toFixed(2)}</span>
        </div>
        <CustomButton className='inverted circle-plus' onClick={ addItem(item) }></CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(updateItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);