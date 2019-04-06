import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuery } from '../redux/actions';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.setQuery(e.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:&nbsp;
            <input
              type="text"
              value={this.props.query}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { setQuery }
)(Search);
