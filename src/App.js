import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/Navbar.js'
import SideDrawer from './components/SideDrawer.js'
import MovieScreen from './components/movieScreen/MovieScreen.js'
import About from './components/About.js'
import Support from './components/Support.js'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="appBackground">
          <NavBar />
          <Route exact path="/" component={MovieScreen} />
          <Route path="/about" component={About} />
          <Route path="/support" component={Support} />
          {
            this.props.isDrawerOpen
            ?
            <SideDrawer />
            :
            null
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    marqueeHeight: state.yPosReducer.marqueeHeight,
    navbarHeight: state.yPosReducer.navbarHeight,
    isDrawerOpen: state.drawerReducer.isDrawerOpen
  };
}

export default connect(mapStateToProps, null)(App);
