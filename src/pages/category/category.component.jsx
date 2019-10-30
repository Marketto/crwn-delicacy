import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCatalogCategory } from '../../redux/catalog/catalog.selectors';

import CategoryItem from '../../components/category-item/category-item.component';

import './category.style.scss'

const CategoryPage = ({ category: { title, items } }) => (
    <div className='category-page'>
        <h2 className='title'>{ title }</h2>
        <div className='items'>
            {
                items.map((item) => <CategoryItem key={ item.id } item={ item }/>)
            }
        </div>
    </div>
);

const mapStateToParams = ( state, { match: { params: { categorySlug } } } ) => ({
    category: selectCatalogCategory(categorySlug)(state)
});

export default withRouter(connect(mapStateToParams)(CategoryPage));