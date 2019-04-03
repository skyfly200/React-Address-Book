import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import List from './List.js';
import Form from './Form.js';
import AddressList from './AddressList.js';
import AddressForm from './AddressForm.js';

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
      ],
      name: '',
      address: ''
    }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1> Address Book App </h1>
            <AddressList
              addresses={this.state.addresses}
              query={this.state.query}
              onChange={this.handleQueryChange}
            />
            <AddressForm
              onSubmit={this.handleFormSubmit}
              onNameChange={this.handleNameChange}
              onAddressChange={this.handleAddressChange}
            />
            <Route exact path="/" component={List} />
            <Route path="/new" component={Form} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
