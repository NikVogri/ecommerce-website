import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {
  const [userCredentials, setuserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setuserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.log(err);
    }
  }
  const handleChange = event => {
    const { name, value } = event.target;
    setuserCredentials({ ...userCredentials, [name]: value });
  }
  const { displayName, email, password, confirmPassword } = userCredentials;
  return (
    <div className='sign-up'>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} required label='Display Name' />
        <FormInput type='email' name='email' value={email} onChange={handleChange} required label='Email' />
        <FormInput type='password' name='password' value={password} onChange={handleChange} required label='Password' />
        <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} required label='Confirm Password' />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
};

export default SignUp
