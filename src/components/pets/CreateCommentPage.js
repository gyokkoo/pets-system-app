import React, { Component } from 'react'
import FormHelpers from '../common/forms/FormHelpers'
// import CreateCommentForm from './CreateCommentForm'
// import petActions from '../../actions/PetActions'
// import petStore from '../../stores/PetStore'
import toastr from 'toastr'

class CreateCommentPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comment: {
        message: ''
      },
      addedByUser: '',
      error: ''
    }

    this.handleCommentCreation = this.handleCommentCreation.bind(this)

    // petStore.on(petStore.eventTypes.PET_CREATED, this.handlePetCreation)
  }

  // componentWillUnmount () {
  //   petStore.removeListener(
  //     petStore.eventTypes.PET_CREATED, this.handlePetCreation)
  // }

  // handlePetChange (event) {
  //   const formChangeFunction = FormHelpers.handleFormChange.bind(this)
  //   formChangeFunction(event, 'pet')
  // }

  handlePetForm (event) {
    event.preventDefault()

    // TODO: validate form data

    // petActions.create(this.state.pet)
  }

  handleCommentCreation (data) {
    console.log(data)
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push(`/pets-system-app/`)
    }
  }

  render () {
    return (
      <div>
        <h3>Add your comment:</h3>
        <div>Comming soon...</div>
      </div>
    )
  }
}

export default CreateCommentPage
