import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuery, getAddreses } from '../redux/selectors';
import Address from './Address.js';
import Search from './Search.js';
import { fields, entryKey } from '../fields.js';
import { capitalize, searchFields } from '../helpers.js';

class AddressList extends Component {
  render() {
    const query = this.props.query.toLowerCase();
    const addresses = this.props.addresses.slice();
    const filteredList =
      query !== ''
        ? addresses.filter(entry => entry && searchFields(entry, fields, query))
        : addresses;

    return (
      <div className="AddressList">
        <Search query={this.props.query} />
        <table>
          <tbody>
            <tr>
              {fields.map(field => (
                <td key={field}>{capitalize(field)}</td>
              ))}
            </tr>
            {filteredList.map(entry => (
              <Address key={entry[entryKey]} entry={entry} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: getQuery(state),
    addresses: getAddreses(state)
  };
};

export default connect(mapStateToProps)(AddressList);
