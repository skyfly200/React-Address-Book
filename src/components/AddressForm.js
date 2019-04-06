import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAddress } from '../redux/actions';
import { fields, entryKey } from '../fields.js';
import { capitalize } from '../helpers.js';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var entryFields = {};
    for (var i in fields) {
      let field = fields[i];
      let value = this.refs[field].value;
      entryFields[field] = value;
    }

    if (entryFields[entryKey] !== '') {
      this.props.onSubmit();
      this.props.addAddress(entryFields);
    } else {
      // add error message display
    }
  }

  render() {
    return (
      <div className="AddressForm">
        <h3> Add an Address </h3>
        <form onSubmit={this.handleSubmit}>
          {fields.map(field => (
            <div key={field} className="field">
              <label>{capitalize(field)}:&nbsp;</label>
              <input type="text" ref={field} />
            </div>
          ))}
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
