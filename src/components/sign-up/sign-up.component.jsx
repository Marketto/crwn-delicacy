import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import {
    SignUpContainer,
    Title,
    SignUpForm,
    InputGroupContainer
} from './sign-up.style';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = this.resetFormState;
    }

    get resetFormState() {
        return {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState(this.resetFormState);
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    }
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <Title>I do not have an account</Title>
                <span>Sign up with your email and password</span>
                <SignUpForm onSubmit={this.handleSubmit}>
                    <InputGroupContainer>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={displayName}
                            onChange={this.handleChange}
                            label='Display name'
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            label='Email'
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            label='Password'
                            required
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label='Confirm Password'
                            required
                        />
                    </InputGroupContainer>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </SignUpForm>
            </SignUpContainer>
        );
    }
}

export default SignUp;