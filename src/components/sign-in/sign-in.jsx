import React, { useState } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({
        email: '',
        password: ''
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = event => {
    console.log('handlechange')
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="password" />
        <div className='buttons'>
          <CustomButton type="submit" value='submit form'>SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} value='submit form' isGoogleSignin>SIGN IN WITH GOOGLE</CustomButton>
        </div>

      </form>
    </div>
  )
}

export default SignIn;