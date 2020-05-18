import React from 'react';

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

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h1>Sign In</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            onchange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onchange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignIn;
