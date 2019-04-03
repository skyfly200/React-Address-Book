import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  handleAddressChange(e) {
    this.props.onAddressChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.refs.name.value && this.refs.address.value) {
      var nameInput = this.refs.name;
      var addressInput = this.refs.address;
      nameInput.value = '';
      addressInput.value = '';

      this.props.onSubmit(e.target.value);
    } else {
      // add error message
    }
  }

  render() {
    return (
      <div className="Search">
        <h3> Add an Address </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:&nbsp;
            <input
              type="text"
              ref="name"
              value={this.props.name}
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <label>
            Address:&nbsp;
            <input
              type="text"
              ref="address"
              value={this.props.address}
              onChange={this.handleAddressChange}
            />
          </label>
          <br />
          <input type="submit" />
          &nbsp;
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddressForm;
