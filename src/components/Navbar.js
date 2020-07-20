import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { drawerAction } from './redux/actions/drawerController.js'
import { getNavbarHeight } from './redux/actions/yPosController.js'
import { ReactComponent as Menu } from '../assets/menu.svg'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.documentNavbarBounding = this.documentNavbarBounding.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.documentNavbarBounding);
    this.documentNavbarBounding();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.documentNavbarBounding);
  }

  documentNavbarBounding() {
    let el = document.getElementById('navbar');
    let elBounding = el.getBoundingClientRect();
    let height = elBounding.height;

    this.props.getNavbarHeight(height)
  }

  render() {
    return (
      <div id='navbar' className='navbarContain'>
        <div className="menuListDesktop">
          <Link to='/'>
            <h4>Movies</h4>
          </Link>
          <Link to='/about'>
            <h4>About</h4>
          </Link>
          <Link to='/support'>
            <h4>Support</h4>
          </Link></div>
        <Menu className='menuIcon' onClick={() => this.props.drawerAction(true)} />
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
    drawerAction: modalState => dispatch(drawerAction(modalState)),
    getNavbarHeight: height => dispatch(getNavbarHeight(height))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
