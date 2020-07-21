import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { addToArchive } from '../redux/actions/movieController.js';
import { setMarqueeModal } from '../redux/actions/postMovieModalController.js';
import { getMarqueeHeight } from '../redux/actions/yPosController.js';

class Marquee extends Component {
  constructor() {
    super()
    this.state= {
      shouldRender: true
    }
    this.documentMarqueeBounding = this.documentMarqueeBounding.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.documentMarqueeBounding);
    this.documentMarqueeBounding();
  }

  componentDidUpdate() {
    this.documentMarqueeBounding();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.documentMarqueeBounding);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      shouldRender: props.test
    };
  }

  documentMarqueeBounding() {
    let el = document.getElementById('marquee');
    let elBounding = el.getBoundingClientRect();
    let height = elBounding.height;

    this.props.getMarqueeHeight(height)
  }

  setArchiveStates(i) {
    this.props.setMarqueeModal(false)
    setTimeout(() => {
      this.props.addToArchive(i)
    }, 1200);
  }

  _renderMovie(){
		return Object.entries(this.props.marqueeFilm).map(([key, movie], i) => {
			return (
        <div
          className="marqueeBackground"
          key={i}
          style={{ animation: `${this.state.shouldRender ? "marqueeTransionStart 4s cubic-bezier(.25,-0.41,.35,.88)" : "slideUpMarquee 1.2s cubic-bezier(.21,.07,.3,.97)"} ` }}
        >
          <div className="marqueeContain">
            <a className="marqueeLinkOverlay" href={movie.link}>:D</a>
            <div className="marqueeBorder"/>
            <div className="mlEnd userRequest">
              <h6>requested by {movie.user}</h6>
            </div>
            <div className="marqueeLine ml1" />
            <h2 className="nowPlaying">NOW PLAYING</h2>
            <div className="marqueeLine ml2" />
            <h2 className='marqueeFilmTitle'>" {movie.title} "</h2>
            <div className="marqueeLine ml3" />
            <div className="mlEnd trailerLink">
              <h6>click to view trailer</h6>
            </div>
          </div>
          <div className="marqueeDetailsContain">
            <div className="detailItem">
              <h4 className="marqueeLabel">Genre</h4>
              <h3 className='marqueeGenre'>{movie.genre}</h3>
            </div>
            <div className="detailItem">
              <h4 className="marqueeLabel">Runtime</h4>
              <h3 className='marqueeRuntime'>{movie.runtime}</h3>
            </div>
            <Button variant="contained" color='primary' className='archiveButton' onClick={() => this.setArchiveStates(i)}>archive</Button>
          </div>
        </div>
			)
		})
	}

  render() {
    return (
      <div id='marquee'>
        {this._renderMovie()}
      </div>
    );
   }
}


function mapStateToProps(state) {
  return {
    marqueeFilm: state.movieReducer.marqueeFilm,
    test: state.postMovieModalReducer.test,
    isModalOpen: state.postMovieModalReducer.isModalOpen,
    isDrawerOpen: state.drawerReducer.isDrawerOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToArchive: index => dispatch(addToArchive(index)),
    setMarqueeModal: index => dispatch(setMarqueeModal(index)),
    getMarqueeHeight: height => dispatch(getMarqueeHeight(height))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Marquee);
