import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPreview from '../category-preview/category-preview.component';

import { selectCatalogProducts } from '../../redux/catalog/catalog.selectors';

import './category-overview.style.scss';

const CategoryOverview = ({ catalog }) => (
    <div className='category-overview'>
        {
            catalog
                .map(({ id, ...otherCategoryProps}) => <CategoryPreview key={ id } { ...otherCategoryProps }></CategoryPreview>)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    catalog: selectCatalogProducts(4)
});

export default connect(mapStateToProps)(CategoryOverview);