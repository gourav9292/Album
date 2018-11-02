import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {
  state = { albums: [] };
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  render() {
    console.log(this.state);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}
