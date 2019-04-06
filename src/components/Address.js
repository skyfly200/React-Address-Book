import React, { Component } from 'react';
import { fields } from '../fields.js';

class Address extends Component {
  render() {
    return (
      <tr className="Address">
        {fields.map(field => (
          <td key={field}> {this.props.entry[field]} </td>
        ))}
      </tr>
    );
  }
}

export default Address;
