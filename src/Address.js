import React, { Component } from 'react';

class Address extends Component {
  render() {
    return (
      <tr className="Address">
        <td>{this.props.name}</td>
        <td>{this.props.address}</td>
      </tr>
    );
  }
}

export default Address;
