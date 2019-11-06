import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImage,
    MenuContent,
    Title,
    Subtitle
} from './menu-item.style';

// history injected by withRouter
const MenuItem = ({ slug, title, subtitle, type, imageUrl, history, match }) => (
    <MenuItemContainer type={type} onClick={ () => history.push(`${match.url}shop/${slug}`)}>
        <BackgroundImage imageUrl={imageUrl} />
        <MenuContent>
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </MenuContent>
    </MenuItemContainer>
);

export default withRouter(MenuItem);