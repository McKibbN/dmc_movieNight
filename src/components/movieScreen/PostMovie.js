import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addToQueue } from '../redux/actions/movieController.js';
import { setMarqueeModal } from '../redux/actions/postMovieModalController.js';
import { modalInteraction } from '../redux/actions/postMovieModalController.js';


class PostMovie extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      link: "",
      genre: "",
      runtime: "",
      user: "",
      submitTriggered: false,
      shouldRender: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitTriggered: true})
    for (let key in this.state) {
      if(this.state[key] === "") {
         return
      } else {
        continue
      }
    }
    this.props.addToQueue({
      title: this.state.title,
      link: this.state.link,
      genre: this.state.genre,
      runtime: this.state.runtime,
      user: this.state.user
    });
    this.setState({
      title: '',
      link: '',
      genre: '',
      runtime: '',
      user: ''
    });
    this.props.setMarqueeModal(true)
    this.toggleRender();
    this.setState({submitTriggered: false});

  }

  toggleRender() {
    if (this.props.isModalOpen) {
      this.setState({shouldRender: false})
    };
  }

  render() {
    return(
      <div className="postMovieBackground">
        <div
          className="postMovieModal"
          style={{ animation: `${this.state.shouldRender ? "slideUpStart" : "slideUpEnd"} 0.8s cubic-bezier(.25,-0.41,.35,.88)` }}
          onAnimationEnd={this.state.shouldRender ? null : () => this.props.modalInteraction(false)}
        >
          <h3 className="postMovieHeader">Post Film Suggestion</h3>
          <div className="movieForm">
             <TextField
               required
               className="postMovieInput"
               type="text"
               label="Title"
               name="title"
               value={this.state.title}
               placeholder="Title"
               onChange={this.handleChange}
               variant="filled"
               error={this.state.title === '' & this.state.submitTriggered === true}
             />
             <TextField
               required
               className="postMovieInput"
               type="text"
               label="Link"
               name="link"
               value={this.state.link}
               placeholder="Link"
               onChange={this.handleChange}
               variant="filled"
               error={this.state.link === '' & this.state.submitTriggered === true}
             />
             <TextField
               required
               className="postMovieInput"
               type="text"
               label="Genre"
               name="genre"
               value={this.state.genre}
               placeholder="Genre"
               onChange={this.handleChange}
               variant="filled"
               error={this.state.genre === '' & this.state.submitTriggered === true}
             />
             <TextField
               required
               className="postMovieInput"
               type="text"
               label="Runtime"
               name="runtime"
               value={this.state.runtime}
               placeholder="Runtime"
               onChange={this.handleChange}
               variant="filled"
               error={this.state.runtime === '' & this.state.submitTriggered === true}
             />
             <TextField
               required
               className="postMovieInput"
               type="text"
               label="User"
               name="user"
               value={this.state.user}
               placeholder="User"
               onChange={this.handleChange}
               variant="filled"
               error={this.state.user === '' & this.state.submitTriggered === true}
             />
             <Button className="postButton" onClick={this.handleSubmit}>Post</Button>
          </div>
        </div>
        <div
          className='backdrop'
          style={{ animation: `${this.state.shouldRender ? "backdropOpacityStart 0.6s linear" : "backdropOpacityEnd 0.4s linear"}` }}
          onClick={() => this.toggleRender()}
          onAnimationEnd={this.state.shouldRender ? null : () => this.props.modalInteraction(false)}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.postMovieModalReducer.isModalOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToQueue: movie => dispatch(addToQueue(movie)),
    setMarqueeModal: index => dispatch(setMarqueeModal(index)),
    modalInteraction: modalState => dispatch(modalInteraction(modalState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostMovie);
