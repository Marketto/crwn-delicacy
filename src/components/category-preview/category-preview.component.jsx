import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-preview.style.scss';

import CategoryItem from '../category-item/category-item.component';

const CategoryPreview = ({ title, slug, items, history, match }) => (
    <div className='category-preview'>
        <h1 className='title' onClick={ () => history.push(`${match.url}/${slug}`) }>{title}</h1>
        <div className='preview'>
            {
                items
                    .map((item) => <CategoryItem key={ item.id } item={ item }></CategoryItem>)
            }
        </div>
    </div>
);

export default withRouter(CategoryPreview);