import React, { Component } from 'react'
import Auth from './Auth'
import FormHelpers from '../common/forms/FormHelpers'
import LoginForm from './LoginForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)
    userStore.on(userStore.eventTypes.USER_LOGGED_IN, this.handleUserLogin)
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  handleUserChange (event) {
    const formChangeFunction = FormHelpers.handleFormChange.bind(this)
    formChangeFunction(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()

    // Validate form

    userActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      this.setState({
        error: data.message
      })
    } else {
      Auth.authenticateUser(data.token)
      Auth.saveUser(data.user)
      toastr.success(data.message)
      this.props.history.push('/pets-system-app/')
    }
  }

  render () {
    return (
      <div>
        <h1>Login Into your account</h1>
        <LoginForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default LoginPage
