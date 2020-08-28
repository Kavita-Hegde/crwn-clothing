import React from 'react';

import './sign-in-and-sign-up.style.scss';
import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';


const SignInAndSignUpPage = () => (

<div className='sign-in-and-sign-up'>
    <SignIn></SignIn>
    <SignUp></SignUp>
</div>

);

export default SignInAndSignUpPage;