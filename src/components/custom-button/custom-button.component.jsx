import React from 'react';

import { CustomButtonContainer } from './custom-button.style';

export default ({ children, className, ...otherProps }) => (
    <CustomButtonContainer className={ className } { ...otherProps }>
        {children}
    </CustomButtonContainer>
);