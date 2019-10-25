import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import SHOP_DATA from '../../shop.data';

import './directory.style.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: SHOP_DATA
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...sectionProps}) => (
                        <MenuItem key={id} {...sectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;