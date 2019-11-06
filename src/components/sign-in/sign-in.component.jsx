import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInForm,
    Title,
    InputGroupContainer,
    ButtonContainer
} from './sign-in.style';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            });
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = ({target: { value, name }}) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <SignInForm onSubmit={this.handleSubmit}>
                    <InputGroupContainer>
                        <FormInput
                            name="email"
                            type="email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label='email'
                            required
                        />
                        <FormInput
                            name="password"
                            type="password"
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label='password'
                            required
                        />
                    </InputGroupContainer>
                    <ButtonContainer>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} className='google-sign-in'>
                            Google sign in
                        </CustomButton>
                    </ButtonContainer>
                </SignInForm>
            </SignInContainer>
        );
    }
}

export default SignIn;