import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

// history injected by withRouter
const MenuItem = ({ slug, title, subtitle, type, imageUrl, history, match }) => (
    <div className={`menu-item ${type}`} onClick={ () => history.push(`${match.url}${slug}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">{ subtitle }</span>
        </div>
    </div>
);

export default withRouter(MenuItem);