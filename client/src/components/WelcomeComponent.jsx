import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from '../auth/HeaderComponent';
import MainPage from './MainPage';

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <div className='login-header-postion'>
          <HeaderComponent></HeaderComponent>
        </div>
        <div>
          <MainPage></MainPage>
        </div>
      </div>
    );
  }
}

export default WelcomeComponent;
