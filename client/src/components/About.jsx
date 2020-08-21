import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About Full-Stack Development</h2>
        <div className='ui divider'></div>
        <div>
          <h3>BackEnd - NodesJS</h3>
          <p>
            Node.js is an open source server environment.It is free.It runs on
            various platforms (Windows, Linux, Unix, Mac OS X, etc.).Node.js
            uses JavaScript on the server
          </p>
          <div className='ui divider'></div>
          <h3>FrontEnd - ReactJS</h3>
          <p>
            React is a front-end library developed by Facebook.React is a
            JavaScript library for building user interfaces.React is used to
            build single page applications.React allows us to create reusable UI
            components.
          </p>
          <div className='ui divider'></div>
          <h3>MiddleWare - Redux</h3>
          <p>
            Redux is quite an excellent State Managment Framework usually used
            with React.js library. In Single Page Application, data management
            at client side is far more complicated than just imagine. However,
            In React.js state management is possible, but when the application
            gets bigger and bigger, unwanted errors and data changes are
            detected, and which module has changed which state and which view is
            updated, all these matters get complex, and we feel like, we trapped
            in our application. Facebook gives the solution. Its developer has
            created one State management pattern called Flux.
          </p>
          <div className='ui divider'></div>
        </div>
      </div>
    );
  }
}

export default About;
