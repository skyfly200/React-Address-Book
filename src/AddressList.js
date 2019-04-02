import React, { Component } from 'react';
import Address from './Address.js';

class AddressList extends Component {
  render() {
    const query = this.props.query.toLowerCase();
    const filteredList = this.props.addresses.filter(entry => {
      return (
        entry &&
        (entry.name.toLowerCase().indexOf(query) !== -1 ||
          entry.address.toLowerCase().indexOf(this.props.query) !== -1)
      );
    });
    const addressList = filteredList.map(entry => (
      <Address key={entry.name} name={entry.name} address={entry.address} />
    ));
    return (
      <div className="AddressList">
        <h2> Name - Address </h2>
        <ul> {addressList} </ul>
      </div>
    );
  }
}

export default AddressList;
