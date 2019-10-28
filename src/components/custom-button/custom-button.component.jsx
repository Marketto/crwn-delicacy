import React from 'react';

import './custom-button.style.scss';

export default ({ children, className, ...otherProps }) => (
    <button className={`custom-button ${className}`} {...otherProps}>
        {children}
    </button>
);