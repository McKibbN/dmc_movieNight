import React, { Component } from 'react';
import FlatList from 'flatlist-react';
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';

class ArchiveList extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  renderMovie = (movie, i) => {
  return (
    <div className='movieCard' key={i} >
      <h4 className="queueCardNumber">{i + 1}.</h4>
      <Card className='movieObjectContain'>
        <h3 className='queueCardTitle'>" {movie.title} "</h3>
        <h4 className='queueCardGenre'>{movie.genre}</h4>
        <h4 className='queueCardRuntime'>Runtime: {movie.runtime}</h4>
        <a href={movie.link} className='queueCardLink'>View Trailer</a>
        <h4 className='queueCardUser'>Requested by {movie.user}</h4>
      </Card>
    </div>
  );
}

  render() {
    return (
      <div className="moviesContain">
        <h2>Archive List</h2>
        <div className="movieCards">
          <FlatList
            list={this.props.archive}
            renderItem={this.renderMovie}
            renderWhenEmpty={() => <h5>Archive is Empty</h5>}
          />
        </div>
      </div>
    );
   }
}

function mapStateToProps(state) {
  return {
    archive: state.movieReducer.archive
  };
}


export default connect(mapStateToProps)(ArchiveList);
