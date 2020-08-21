import React, { Component } from 'react';
import myImage from '../images/box.png';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    var url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      console.log(isLoaded);
      return <div>Please wait,Loading...</div>;
    } else {
      return (
        <div>
          <h2>Meet the Team</h2>
          <div className='ui divider'></div>
          {items.map((items) => (
            <h3 key={items.id}>
              {/* {<img src={myImage} className='imagesize' />} */}
              {items.name}
            </h3>
          ))}
        </div>
      );
    }
  }
}

export default Team;
