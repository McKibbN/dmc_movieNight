import React from 'react';
import { connect } from 'react-redux';
import MovieQueue from './MovieQueue.js'
import ArchiveList from './ArchiveList.js'
import Marquee from './Marquee.js'
import PostMovie from './PostMovie.js'
import '../../App.css';

class MovieScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldTransitionDown: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      shouldTransitionDown: props.test
    };
  }

  render() {
    const style = {
      transform: `translateY(${this.state.shouldTransitionDown ? this.props.marqueeHeight : '0'}px)`,
      transition: 'all 1.2s cubic-bezier(.21,.07,.3,.97)',
      position: 'absolute',
      zIndex: 9,
      top: '8vh'
    }

    return (
      <div className="movieScreen">
      {console.log(this.props.marqueeHeight)}
        <Marquee />
        <div
          id='queueAndArchive'
          className="queueAndArchive"
          style={style}
        >
          <MovieQueue />
          <ArchiveList />
        </div>
        {
          this.props.isModalOpen
          ?
          <PostMovie />
          :
          null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.postMovieModalReducer.isModalOpen,
    test: state.postMovieModalReducer.test,
    marqueeHeight: state.yPosReducer.marqueeHeight,
  };
}

export default connect(mapStateToProps, null)(MovieScreen);
