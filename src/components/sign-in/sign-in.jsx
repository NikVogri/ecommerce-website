import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = event => {
    console.log('handlechange')
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password" />
          <div className='buttons'>
            <CustomButton type="submit" value='submit form'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} value='submit form' isGoogleSignin>SIGN IN WITH GOOGLE</CustomButton>
          </div>

        </form>
      </div>
    )
  }
}
