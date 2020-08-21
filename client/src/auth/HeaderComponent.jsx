import React, { Component } from 'react';
import './HeaderComponent.css';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <span className='header-right-part'>
          <h4>ReactJS</h4>
          <h1>iJavaScript</h1>
        </span>
        <span className='header-left-part'></span>
      </div>
    );
  }
}

export default HeaderComponent;
