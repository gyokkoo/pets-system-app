import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../users/Auth'
import userStore from '../../stores/UserStore'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: Auth.getUser().name
    }

    this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)

    userStore.on(userStore.eventTypes.USER_LOGGED_IN, this.handleUserLoggedIn)
  }

  handleUserLoggedIn (data) {
    if (data.success) {
      this.setState({
        username: data.user.name
      })
    }
  }

  render () {
    let navbarLinks = ''
    if (Auth.isUserAuthenticated()) {
      navbarLinks =
        <ul className='nav navbar-nav center '>
          <li><Link to='/pets-system-app/'>All Pets</Link></li>
          <li><Link to='/pets-system-app/pets/add'>Add Pet</Link></li>
          <li><a>{this.state.username}</a></li>
          <li><Link to='/pets-system-app/users/logout'>Logout</Link></li>
        </ul>
    } else {
      navbarLinks =
        <ul className='nav navbar-nav'>
          <li><Link to='/pets-system-app/users/register'>Register</Link></li>
          <li><Link to='/pets-system-app/users/login'>Login</Link></li>
        </ul>
    }

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/pets-system-app/' className='navbar-brand'>Pets Project</Link>
          </div>
          {navbarLinks}
        </div>
      </nav>
    )
  }
}

export default Navbar
