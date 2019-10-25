import React from 'react';

import './collection-item.style.scss';

export default ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price.toFixed(2)}</span>
        </div>
    </div>
);