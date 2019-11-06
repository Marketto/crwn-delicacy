import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPage from '../category/category.component';
import CategorysOverview from '../../components/category-overview/category-overview.component';

import { ShopPageContainer } from './shoppage.style';

const ShopPage = ({ match }) => (
    <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CategorysOverview} />
        <Route path={`${match.path}/:categorySlug`} component={CategoryPage} />
    </ShopPageContainer>
);

export default ShopPage;