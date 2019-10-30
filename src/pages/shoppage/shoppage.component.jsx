import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPage from '../category/category.component';
import CategorysOverview from '../../components/category-overview/category-overview.component';

import './shoppage.style.scss';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CategorysOverview} />
        <Route path={`${match.path}/:categorySlug`} component={CategoryPage} />
    </div>
);

export default ShopPage;