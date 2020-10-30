import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddPlaylist from './components/AddPlaylist';
import Playlists from './components/Playlists';
import AddMusics from './components/AddMusics';


class App extends React.Component {
  state = {
    page: true
  }

  changePage = () => {
    if(this.state.page) {
      this.setState({ page: false })
    } else {
      this.setState({ page: true})
    }
  }

  render() {
    const renderAdd = () => {
      if(this.state.page){
        return <AddPlaylist changePage={this.changePage} />
      } else {
        return <Playlists changePage={this.changePage} />
      }
    }
  return (
    <div className="App">
      {renderAdd()}
      
      {/* <Playlists/>
      <AddMusics/> */}
    </div>
  );
  }
}

export default App;
