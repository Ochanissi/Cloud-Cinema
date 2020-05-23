import React from 'react';
import { connect } from 'react-redux';

import { signInStartAsync } from '../../redux/user/user.actions';

import LogoForm from '../../assets/logo-form.png';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const { signInStartAsync } = this.props;

    signInStartAsync(email, password);

    // this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <span className='sign-in__background' />
        <div className='sign-in__content'>
          <img
            className='sign-in__content--logo'
            alt='Form Logo'
            src={LogoForm}
          />
          <form className='sign-in__content--form' onSubmit={this.handleSubmit}>
            <h2 className='sign-in__content--form--header'>Sign In</h2>

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

            <div className='sign-in__content--form--btns'>
              <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton type='submit' link='/auth/sign-up'>
                Sign up
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  signInStartAsync: (email, password) =>
    dispatch(signInStartAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
