import React from 'react';
import LogoForm from '../../assets/logo-form.png';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // post data

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <span className='sign-up__background' />
        <div className='sign-up__content'>
          <img
            className='sign-up__content--logo'
            alt='Form Logo'
            src={LogoForm}
          />
          <form className='sign-up__content--form' onSubmit={this.handleSubmit}>
            <h2 className='sign-up__content--form--header'>Sign Up</h2>

            <FormInput
              name='displayName'
              type='text'
              value={displayName}
              handleChange={this.handleChange}
              required
              label='Display Name'
              placeholder='John Doe'
            />
            <FormInput
              name='email'
              type='email'
              value={email}
              handleChange={this.handleChange}
              required
              label='Email Address'
              placeholder='example@google.com'
            />

            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={this.handleChange}
              required
              label='Password'
              placeholder='••••••••'
            />

            <FormInput
              name='password'
              type='confirmPassword'
              value={confirmPassword}
              handleChange={this.handleChange}
              required
              label='Confirm Password'
              placeholder='••••••••'
            />

            <div className='sign-up__content--form--btns'>
              <CustomButton type='submit'>Sign Up</CustomButton>
              <CustomButton type='submit' link='/auth/sign-in'>
                Sign In
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
