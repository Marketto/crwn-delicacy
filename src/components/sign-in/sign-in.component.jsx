import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

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
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <div className='input-group'>
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
                    </div>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} className='google-sign-in'>
                            Google sign in
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;