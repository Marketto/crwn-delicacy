import React from 'react';

import {
    GroupContainer,
    FormInput,
    FormInputLabel
} from './form-input.style';

export default ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInput onChange={handleChange} { ...otherProps }/>
        <FormInputLabel label={label} filled={otherProps.value.length}>
            {label}
        </FormInputLabel>
    </GroupContainer>
);