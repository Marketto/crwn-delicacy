import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

import { selectCatalogCategories } from '../../redux/catalog/catalog.selectors';

import './directory.style.scss';

const Directory = ({ categories }) => (
    <div className="directory-menu">
        {
            categories.map(({id, ...sectionProps}) => (
                <MenuItem key={id} {...sectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    categories: selectCatalogCategories
});

export default connect(mapStateToProps)(Directory);