import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  handleAddressChange(e) {
    this.props.onAddressChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e.target.value);
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:&nbsp;
            <input
              type="text"
              value={this.props.name}
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <label>
            Address:&nbsp;
            <input
              type="text"
              value={this.props.address}
              onChange={this.handleAddressChange}
            />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Search;