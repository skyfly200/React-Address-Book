import React, { Component } from 'react';
import './App.css';
import AddressList from './AddressList.js';
import AddressForm from './AddressForm.js';
import Search from './Search.js';

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

  handleFormSubmit(entry) {
    this.setState(previousState => ({
      addresses: [
        ...previousState.addresses,
        { name: previousState.name, address: previousState.address }
      ]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Address Book App </h1>
          <Search query={this.state.query} onChange={this.handleQueryChange} />
          <AddressList
            addresses={this.state.addresses}
            query={this.state.query}
          />
          <AddressForm
            onSubmit={this.handleFormSubmit}
            onNameChange={this.handleNameChange}
            onAddressChange={this.handleAddressChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
