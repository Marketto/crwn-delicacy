import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCatalogCategory } from '../../redux/catalog/catalog.selectors';

import CategoryItem from '../../components/category-item/category-item.component';

import { CategoryPageContainer, Title, ItemsContainer } from './category-page.style'

const CategoryPage = ({ category: { title, items } }) => (
    <CategoryPageContainer>
        <Title>{ title }</Title>
        <ItemsContainer>
            {
                items.map((item) => <CategoryItem key={ item.id } item={ item }/>)
            }
        </ItemsContainer>
    </CategoryPageContainer>
);

const mapStateToParams = ( state, { match: { params: { categorySlug } } } ) => ({
    category: selectCatalogCategory(categorySlug)(state)
});

export default withRouter(connect(mapStateToParams)(CategoryPage));