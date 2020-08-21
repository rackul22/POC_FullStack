import React, { Component, Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { login } from '../actions/auth';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';
import './Login.css';
import Alert from '../auth/alert';

const Login = ({ setAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (!email || !password) {
      debugger;
      console.log('Please enter login credentials to continue');
      setAlert('Please enter login credentials to continue', 'danger');
    } else {
      login(email, password);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/Welcome#/dashboard' />;
  }

  return (
    <div className='login-header-position'>
      <div>
        <HeaderComponent />
      </div>
      <div className='login-main-section'>
        <form onSubmit={onSubmit}>
          {/* <div
            className='errorText'
            name='errorMsg'
            hidden={this.state.isFormValid}
          >
            <h3>Error: Invalid user credentials!</h3>
          </div> */}
          <div>
            <label className='userId-label'>User ID</label>
            <Input
              className='userId-input'
              placeholder='Enter your user ID'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              // required
            />
          </div>

          <div className='passwordfield'>
            <label className='userId-label'>Password</label>
            <Input
              className='userId-input'
              placeholder='Enter your password'
              name='password'
              type='password'
              value={password}
              onChange={(e) => onChange(e)}
              // required
            />
          </div>
          <br></br>
          <Alert />
          <div className='login-button-field'>
            {/* <Button className='login-button' onClick={this.onSubmit}>Log In</Button> */}
            <Button className='login-button' type='submit' value='Login'>
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
