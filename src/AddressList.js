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
        <h3> Name - Address </h3>
        {addressList.length > 0 ? (
          <ul> {addressList} </ul>
        ) : (
          <p> Add addresses below to view them here </p>
        )}
      </div>
    );
  }
}

export default AddressList;
