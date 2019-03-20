import React from "react";

export default function(props) {
  return (
    <div className="SearchField">
      <input
        type="text"
        placeholder="Search..."
        value={props.searchText}
        onChange={e => props.handleSearchTextChange(e.target.value)}
      />
      <button onClick={props.search}>Search</button>
    </div>
  );
}
