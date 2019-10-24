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
                    title: "Appetizers",
                    subtitle: "A rainbow of taste",
                    type: 'appetizer',
                    imageUrl: "https://pixabay.com/images/download/antipasto-3484778_640.jpg"
                },
                {
                    id: 2,
                    title: "Buns",
                    subtitle: "Tradition and memories",
                    type: 'fastfood',
                    imageUrl: "https://pixabay.com/images/download/mortadella-2520335_640.jpg"
                },
                {
                    id: 3,
                    title: "Flat Bread",
                    subtitle: "The strength of passion",
                    type: 'fastfood',
                    imageUrl: "https://pixabay.com/images/download/focaccia-2241107_640.jpg"
                },
                {
                    id: 4,
                    title: "Pasta",
                    subtitle: "Home taste",
                    type: 'slowfood',
                    imageUrl: "https://pixabay.com/images/download/spaghetti-2931846_640.jpg"
                },
                {
                    id: 5,
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
                    this.state.sections.map(({id, title, subtitle, type, imageUrl}) => (
                        <MenuItem key={id} title={title} subtitle={subtitle} type={type} imageUrl={imageUrl}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;