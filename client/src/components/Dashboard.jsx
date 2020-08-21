import React, { Component } from 'react';
import myImage from '../images/rachana_pic.PNG';
import './Dashboard.css';
import { PlaceHolder } from 'semantic-ui-react';
import Moment from 'react-moment';
import moment from 'moment';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        heading: '',
      },
      title: 'Rachana Kulkarni',
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className='header'>
            <div className='d3'>
              <div>
                <img src={myImage} className='imagesize ui image' />
              </div>
            </div>
            <div className='d4'>
              {' '}
              <div>
                {' '}
                <h3>Welcome {this.state.title}</h3>
              </div>
              <div>
                <h5>
                  Current Date :{' '}
                  <Moment format='DD/MM/YYYY'>{Date.now()}</Moment>
                </h5>{' '}
              </div>
              <div className='ui divider'></div>
              <div>
                <h3>Project Details</h3>
                <p>
                  This is a full stack project which uses <b>MongoDb</b> as the
                  backend Database and Backend service. In the front end I have
                  used the
                  <b>ReactJS</b> and as the middle-ware I have used the{' '}
                  <b>Redux</b>.
                </p>
                <p>
                  I have also made use of certain libraries like <b>Moment</b>{' '}
                  for Date formatting in Dashboard , which always displays the
                  current date. I have used <b>Axios</b> a networking library
                  which is used for making service API calls. I have also used a
                  combination of <b>Fetch</b> and <b>Axios</b> to get exposure
                  to both concepts. I have also made the <b>Alert handling</b>{' '}
                  dynamic by using the concepts of Redux. I have used the{' '}
                  <b>JWT Authentication</b> for user authentication and maintain
                  a session. I have used the <b>Redux</b> middleware for the
                  Login Component to handle the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
