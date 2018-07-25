import React, { Component } from 'react';
import './App.css';

class UsersList extends Component {

  constructor( props ) {
    super( props );
    this.state = {
        users: props.users,
        users2: 'marcin'
    };
  }

  componentWillUpdate( nextProps ) {
    // console.log(this.props);
    // console.log('-------------');
    // console.log(nextProps);
    if ( this.props !== nextProps ) {
        const {users} = nextProps;
        this.setState( {
            users: users
        } );
    }
  }

  render() {
    const { users } = this.state;
    console.log(this.state);

    if(!users) {
      return (
        <p>Ładuję</p>
      );
    }

    if(users.length < 1) {
      return (
        <p>No results!</p>
      );
    }

    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
    
  }


};

export default UsersList;