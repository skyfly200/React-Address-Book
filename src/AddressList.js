import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Address from './Address.js';
import Search from './Search.js';

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
        <Search query={this.props.query} onChange={this.props.onChange} />
        <Link to="/new">
          <button>Add Address</button>
        </Link>
        <table>
          <tr>
            <td>Name</td>
            <td>Address</td>
          </tr>
          {addressList}
        </table>
      </div>
    );
  }
}

export default AddressList;
