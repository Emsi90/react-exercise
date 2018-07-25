import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList.js';

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class App extends Component {

  constructor() {
    super();
    this.state = ({filteredusers: allUsers});
  }

  render() {
    return (
      <div>
        <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    this.getFilteredUsersForText(text)
    .then(filteredUsers => {
      this.setState({
        filteredUsers
      });
    });
  }

  getFilteredUsersForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
        resolve(filteredUsers);
      }, time) ;
    });
  }
}

export default App;
