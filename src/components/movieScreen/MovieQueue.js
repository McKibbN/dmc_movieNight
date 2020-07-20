import React, { Component } from 'react';
import FlatList from 'flatlist-react';
import { Card } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { removeFromQueue, addToMarquee } from '../redux/actions/movieController.js'
import { modalInteraction, setMarqueeModal } from '../redux/actions/postMovieModalController.js'
import PostMovie from './PostMovie.js'

class MovieQueue extends Component {
  constructor (props) {
    super(props);
    this.state = {}
    this.togglePost = this.togglePost.bind(this);
    this.setMarqueeStates = this.setMarqueeStates.bind(this);
  }

  setMarqueeStates(i) {
    this.props.setMarqueeModal(true);
    this.props.addToMarquee(i)
  }

  togglePost(e) {
    e.preventDefault();
    this.props.modalInteraction(true);
  }

  renderMovie = (movie, i) => {
  return (
    <div key={i} className='movieCard'>
      <h4 className="queueCardNumber">{i + 1}.</h4>
      <Card className='movieObjectContain' key={i}>
        <h3 className='queueCardTitle'>" {movie.title} "</h3>
        <h4 className='queueCardGenre'>{movie.genre}</h4>
        <h4 className='queueCardRuntime'>Runtime: {movie.runtime}</h4>
        <a href={movie.link} className='queueCardLink'>View Trailer</a>
        <h4 className='queueCardUser'>Requested by {movie.user}</h4>
        <div className="queueButtonContain">
          <Button variant="contained" color='secondary' className='queueRemoveButton' onClick={() => this.props.removeFromQueue(i)}>remove</Button>
          {
            this.props.marqueeFilm.length === 0 ? <Button variant="contained" color='primary' className='queueMarqueeButton' onClick={() => this.setMarqueeStates(i)}>marquee</Button> : null
          }
        </div>
      </Card>
    </div>
  );
}

  render() {
    return (
      <div className="moviesContain">
        <h2 className="listTitle">Queue</h2>
        <Button variant="contained" color='primary' className="togglePostButton" onClick={this.togglePost}>+ ADD</Button>
        <div className="movieCards">
          <FlatList
            list={this.props.queue}
            renderItem={this.renderMovie}
            renderWhenEmpty={() => <h5>Please Add to Queue</h5>}
          />
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
    queue: state.movieReducer.queue,
    marqueeFilm: state.movieReducer.marqueeFilm,
    isModalOpen: state.postMovieModalReducer.isModalOpen,
    test: state.postMovieModalReducer.test
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromQueue: index => dispatch(removeFromQueue(index)),
    addToMarquee: index => dispatch(addToMarquee(index)),
    setMarqueeModal: index => dispatch(setMarqueeModal(index)),
    modalInteraction: modalState => dispatch(modalInteraction(modalState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieQueue);
