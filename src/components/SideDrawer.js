import React  from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { drawerAction } from './redux/actions/drawerController.js'
import { ReactComponent as Cross } from '../assets/cross.svg';

class SideDrawer extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldRenderMenu: true
    }
    this.toggleRender = this.toggleRender.bind(this);
  }

  toggleRender() {
    if (this.props.isDrawerOpen) {
      this.setState({shouldRenderMenu: false})
    };
  }

  render() {
    return (
        <div>
          <div
            className='drawerContain'
            style={{ animation: `${this.state.shouldRenderMenu ? "slideLeftStart" : "slideLeftEnd"} 0.4s cubic-bezier(.21,.07,.3,.97)` }}
          >
            <Cross
              className='exitMenuIcon'
              onAnimationEnd={this.state.shouldRenderMenu === false ? () => this.props.drawerAction(false) : null}
              onClick={() => this.toggleRender()} />
            <div
              className='menuListMobile'
              style={{ animation: `${this.state.shouldRenderMenu ? "slideLeftStart" : "slideLeftEnd"} 0.75s cubic-bezier(.21,.07,.3,.97)` }}
            >
              <Link onClick={() => this.toggleRender()} to='/'>
                <h3>Movies</h3>
              </Link>
              <Link onClick={() => this.toggleRender()} to='/about'>
                <h3>About</h3>
              </Link>
              <Link onClick={() => this.toggleRender()} to='/support'>
                <h3>Support</h3>
              </Link>
            </div>
          </div>
          <div
            className='backdrop'
            style={{ animation: `${this.state.shouldRenderMenu ? "backdropOpacityStart" : "backdropOpacityEnd"} 0.4s cubic-bezier(.21,.07,.3,.97)` }}
            onAnimationEnd={this.state.shouldRenderMenu === false ? () => this.props.drawerAction(false) : null}
            onClick={() => this.toggleRender()} />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isDrawerOpen: state.drawerReducer.isDrawerOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    drawerAction: modalState => dispatch(drawerAction(modalState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
