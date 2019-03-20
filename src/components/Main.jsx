import React from "react";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import { API_URL, API_KEY } from "./App";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.search = this.search.bind(this);
  }

  state = {
    searchText: "pewdiepie",
    results: []
  };

  handleSearchTextChange(searchText) {
    this.setState(prevState => ({
      ...prevState,
      searchText
    }));
  }

  search() {
    let searchText = this.state.searchText;
    fetch(`${API_URL}search?q=${searchText}&api_key=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(r =>
        r.data.map(gif => {
          this.setState(prevState => {
            let results = prevState.results;
            results.push(gif.images.downsized_medium.url);
            return {
              ...prevState,
              results
            };
          });
          return gif;
        })
      );
  }

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <main className="App-main">
        <div className="container">
          <SearchField
            searchText={this.state.searchText}
            handleSearchTextChange={this.handleSearchTextChange}
            search={this.search}
          />
          <SearchResults
            results={this.state.results}
            searchText={this.state.searchText}
          />
        </div>
      </main>
    );
  }
}
