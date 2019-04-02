import React, { Component } from 'react';

class Address extends Component {
  render() {
    return (
      <li className="Address">
        {' '}
        {this.props.name} - {this.props.address}{' '}
      </li>
    );
  }
}

export default Address;
