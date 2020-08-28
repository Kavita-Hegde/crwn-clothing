import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.style.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            email:'',
            displayName : '',
            password:'',
            confirmPassword: ''        
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try{

            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                email:'',
                displayName : '',
                password:'',
                confirmPassword: ''   }
            );

        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } =event.target;

        this.setState({ [name] : value });
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2>I don't have an account</h2>
                <span>Sig up with email and password</span>

                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput 
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.displayName}
                        label='displayName'
                        required/>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='confirmPassword'
                        required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>

        )
    }

}

export default SignUp;