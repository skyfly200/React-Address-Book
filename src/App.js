import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import AddressList from './components/AddressList.js';
import AddressForm from './components/AddressForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      addresses: [],
      name: '',
      address: ''
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleQueryChange(query) {
    this.setState({ query: query });
  }

  handleNameChange(name) {
    this.setState({ name: name });
  }

  handleAddressChange(address) {
    this.setState({ address: address });
  }

  handleFormSubmit(entry, history) {
    this.setState(previousState => ({
      addresses: [
        ...previousState.addresses,
        { name: previousState.name, address: previousState.address }
      ],
      name: '',
      address: ''
    }));
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
              render={props => (
                <AddressList
                  {...props}
                  addresses={this.state.addresses}
                  query={this.state.query}
                  onChange={this.handleQueryChange}
                />
              )}
            />
            <Route
              path="/new"
              render={({ props, history }) => (
                <AddressForm
                  {...props}
                  onSubmit={entry => this.handleFormSubmit(entry, history)}
                  onNameChange={this.handleNameChange}
                  onAddressChange={this.handleAddressChange}
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
