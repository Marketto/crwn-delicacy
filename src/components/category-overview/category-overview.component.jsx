import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPreview from '../category-preview/category-preview.component';

import { selectCatalogProducts } from '../../redux/catalog/catalog.selectors';

import { CategoryOverviewContainer } from './category-overview.style';

const CategoryOverview = ({ catalog }) => (
    <CategoryOverviewContainer>
        {
            catalog
                .map(({ id, ...otherCategoryProps}) => <CategoryPreview key={ id } { ...otherCategoryProps }></CategoryPreview>)
        }
    </CategoryOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    catalog: selectCatalogProducts(4)
});

export default connect(mapStateToProps)(CategoryOverview);