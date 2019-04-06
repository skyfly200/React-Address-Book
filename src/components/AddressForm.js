import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAddress } from '../redux/actions';

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var address = this.refs.address.value;

    if (name && address) {
      this.props.onSubmit(e.target.value);
      this.props.addAddress({
        name: name,
        address: address
      });
    } else {
      // add error message
    }
  }

  render() {
    return (
      <div className="AddressForm">
        <h3> Add an Address </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:&nbsp;
            <input type="text" ref="name" value={this.props.name} />
          </label>
          <br />
          <label>
            Address:&nbsp;
            <input type="text" ref="address" value={this.props.address} />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addAddress }
)(AddressForm);
