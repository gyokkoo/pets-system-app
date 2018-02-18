import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

class PetDetailsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pet: {
        name: '',
        age: 0,
        type: '',
        image: '',
        breed: ''
      },
      comments: []
    }

    this.handleDetialsFetching = this.handleDetialsFetching.bind(this)

    petStore.on(petStore.eventTypes.DETAILS_FETCHED, this.handleDetialsFetching)
  }

  componentDidMount () {
    let id = this.props.match.params.id
    petActions.getById(id)
  }

  componentWillUnmount () {
    petStore.removeListener(petStore.eventTypes.DETAILS_FETCHED, this.handleDetialsFetching)
  }

  handleDetialsFetching (data) {
    this.setState({
      pet: data
    })
  }

  render () {
    let comments = ''
    if (this.state.comments.length === 0) {
      comments = 'No comments!'
    } else {
      comments = this.state.comments.map(comment => (
        <div key={comment.id}>
          comment.message
        </div>
      ))
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='span2'>
            <img src={this.state.pet.image} alt={this.state.pet.type} className='img-rounded' />
          </div>
          <div className='span4'>
            <p>{this.state.pet.name}</p>
            <p>{this.state.pet.age} years old</p>
            <p>{this.state.pet.breed}</p>
            <p>Breed: {this.state.pet.type}</p>
          </div>
          <div className='container'>
            <div>Comments:</div>
            {comments}
            <br />
            <Link to={`/pets-system-app/pets/${this.state.pet.id}/comments/create`}>Add comment</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PetDetailsPage
