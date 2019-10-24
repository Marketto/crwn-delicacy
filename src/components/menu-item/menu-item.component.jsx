import React from 'react';

import './menu-item.style.scss';

export default ({ title, subtitle, type, imageUrl }) => (
    <div className={`menu-item ${type}`}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">{ subtitle }</span>
        </div>
    </div>
);