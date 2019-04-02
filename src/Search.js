import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
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

export default Search;
