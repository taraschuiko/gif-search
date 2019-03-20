import React from "react";

export default class SearchField extends React.Component {
  handleInputEnterPress(key) {
    if (key === "Enter") {
      this.props.search();
    }
  }

  render() {
    return (
      <div className="SearchField row">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={e => this.props.handleSearchTextChange(e.target.value)}
          className="col-8 col-md-10"
          onKeyPress={e => this.handleInputEnterPress(e.key)}
        />
        <button onClick={this.props.search} className="col-4 col-md-2">
          Search
        </button>
      </div>
    );
  }
}
