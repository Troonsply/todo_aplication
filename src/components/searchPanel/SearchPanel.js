import React, { Component } from "react";
import "./SearchPanel.css";

export class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <form>
        <input
          className="form-control search-input"
          placeholder={"Type here to Search"}
          onChange={this.onSearchChange}
          value={this.state.term}
        />
      </form>
    );
  }
}
