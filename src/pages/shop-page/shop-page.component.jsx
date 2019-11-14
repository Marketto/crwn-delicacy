import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPage from '../category-page/category-page.component';
import CategorysOverview from '../../components/category-overview/category-overview.component';

import { ShopPageContainer } from './shop-page.style';

const ShopPage = ({ match }) => (
    <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CategorysOverview} />
        <Route path={`${match.path}/:categorySlug`} component={CategoryPage} />
    </ShopPageContainer>
);

export default ShopPage;