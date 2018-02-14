import React, { Component } from 'react'
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
            Comments:
            Coming soon!
          </div>
        </div>
      </div>
    )
  }
}

export default PetDetailsPage
