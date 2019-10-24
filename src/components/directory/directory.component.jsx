import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    id: 1,
                    slug: 'appetizers',
                    title: "Appetizers",
                    subtitle: "A rainbow of taste",
                    type: 'appetizer',
                    imageUrl: "https://pixabay.com/images/download/antipasto-3484778_640.jpg"
                },
                {
                    id: 2,
                    slug: 'buns',
                    title: "Buns",
                    subtitle: "Tradition and memories",
                    type: 'fastfood',
                    imageUrl: "https://pixabay.com/images/download/mortadella-2520335_640.jpg"
                },
                {
                    id: 3,
                    slug: 'flat-bread',
                    title: "Flat Bread",
                    subtitle: "The strength of passion",
                    type: 'fastfood',
                    imageUrl: "https://pixabay.com/images/download/focaccia-2241107_640.jpg"
                },
                {
                    id: 4,
                    slug: 'macaroni',
                    title: "Macaroni",
                    subtitle: "Home taste",
                    type: 'slowfood',
                    imageUrl: "https://pixabay.com/images/download/spaghetti-2931846_640.jpg"
                },
                {
                    id: 5,
                    slug: 'pizza',
                    title: "Pizza",
                    subtitle: "The immortal",
                    type: 'slowfood',
                    imageUrl: "https://pixabay.com/images/download/pizza-3007395_640.jpg"
                },
            ]
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