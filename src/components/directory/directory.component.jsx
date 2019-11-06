import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

import { selectCatalogCategories } from '../../redux/catalog/catalog.selectors';

import { DirectoryMenuContainer } from './directory.style';

const Directory = ({ categories }) => (
    <DirectoryMenuContainer>
        {
            categories.map(({id, ...sectionProps}) => (
                <MenuItem key={id} {...sectionProps}/>
            ))
        }
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    categories: selectCatalogCategories
});

export default connect(mapStateToProps)(Directory);