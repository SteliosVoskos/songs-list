import React, { Component } from "react";

import Layout from "./Templates/Layout";
import SongsTable from "./components/Songs/SongsTable";

import "./styles.css";

import data from "./songs.json";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: data.songs || [],
      searchValue: ""
    };
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      searchValue: value
    }));
  };

  render() {
    return (
      <Layout>
        <SongsTable
          songs={this.state.songs}
          value={this.state.searchValue}
          onSearchValueChange={this.handleSearch}
        />
      </Layout>
    );
  }
}
