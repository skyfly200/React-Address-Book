import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import AddressList from './components/AddressList.js';
import AddressForm from './components/AddressForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(entry, history) {
    // redirect to "/"
    history.push('/');
  }

  render() {
    return (
      <Switch>
        <div className="App">
          <header className="App-header">
            <h1> Address Book App </h1>
            <nav>
              <NavLink to="/">Find</NavLink> | <NavLink to="/new">Add</NavLink>
            </nav>
            <Route
              exact
              path="/"
              render={props => <AddressList {...props} />}
            />
            <Route
              path="/new"
              render={({ props, history }) => (
                <AddressForm
                  {...props}
                  onSubmit={entry => this.handleFormSubmit(entry, history)}
                />
              )}
            />
          </header>
        </div>
      </Switch>
    );
  }
}

export default App;
