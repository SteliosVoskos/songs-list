import React, { Component } from "react";

export default class SongsList extends Component {
  render() {
    const { songs, value } = this.props;
    const filteredSongs = songs.filter(
      (song) => song.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    return filteredSongs.map((song) => {
      return (
        <tr key={song.itemId}>
          <td>{song.title}</td>
          <td>{song.artist}</td>
          <td>{song.releaseYear}</td>
          <td>{song.genre}</td>
          <td>
            <input type="checkbox" onChange={(e) => e.target.checked} />
          </td>
        </tr>
      );
    });
  }
}
