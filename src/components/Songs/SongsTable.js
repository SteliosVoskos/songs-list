import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SongsList from "./SongsList";

const Container = styled.div`
  height: auto;
  position: relative;
`;
export default class SongsTable extends Component {
  handleSearchValueChange = (event) => {
    this.props.onSearchValueChange(event);
  };
  render() {
    return (
      <Container>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleSearchValueChange}
          placeholder="Search"
        />
        <table>
          <thead>
            <tr>
              <th>Song name</th>
              <th>Artist</th>
              <th>Release year</th>
              <th>Genre</th>
              <th>Is favourite</th>
            </tr>
          </thead>
          <tbody>
            <SongsList songs={this.props.songs} value={this.props.value} />
          </tbody>
        </table>
      </Container>
    );
  }
}
