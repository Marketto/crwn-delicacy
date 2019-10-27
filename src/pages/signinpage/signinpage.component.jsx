import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signinpage.style.scss';

export default () => (
    <div className='sign-in-page'>
        <SignIn />
        <SignUp />
    </div>
);