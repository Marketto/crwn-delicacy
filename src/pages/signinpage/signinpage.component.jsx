import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInPageContainer } from './signinpage.style';

export default () => (
    <SignInPageContainer>
        <SignIn />
        <SignUp />
    </SignInPageContainer>
);