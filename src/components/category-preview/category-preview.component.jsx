import React from 'react';
import { withRouter } from 'react-router-dom';

import CategoryItem from '../category-item/category-item.component';

import {
    CategoryPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './category-preview.style';

const CategoryPreview = ({ title, slug, items, history, match }) => (
    <CategoryPreviewContainer>
        <TitleContainer onClick={ () => history.push(`${match.url}/${slug}`) }>{title}</TitleContainer>
        <PreviewContainer>
            {
                items
                    .map((item) => <CategoryItem key={ item.id } item={ item }></CategoryItem>)
            }
        </PreviewContainer>
    </CategoryPreviewContainer>
);

export default withRouter(CategoryPreview);