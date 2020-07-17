import React from 'react';
import { connect } from 'react-redux';
import MovieQueue from './MovieQueue.js'
import ArchiveList from './ArchiveList.js'
import Marquee from './Marquee.js'
import '../../App.css';

class MovieScreen extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="movieListsContain">
        <Marquee />
        <MovieQueue />
        <ArchiveList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, null)(MovieScreen);
