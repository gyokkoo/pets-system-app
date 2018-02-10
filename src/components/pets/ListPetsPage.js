import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'


class ListPetsPage extends Component {
  constructor (props) {
    super(props)

    let query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1

    this.state = {
      pets: [],
      page: page
    }

    this.handlePetsFetching = this.handlePetsFetching.bind(this)

    petStore.on(petStore.eventTypes.PETS_FETCHED, this.handlePetsFetching)
  }

  componentDidMount () {
    petActions.all(this.state.page)
  }

  componentWillUnmount () {
    petStore.removeListener(petStore.eventTypes.PETS_FETCHED, this.handlePetsFetching)
  }

  handlePetsFetching (data) {
    this.setState({
      pets: data
    })
  }

  goToPrevPage () {
    if (this.state.pets.length === 0) {
      return
    }

    let page = this.state.page
    if (page === 1) {
      return
    }

    page--

    this.setState({
      page
    })

    this.props.history.push(`/?page=${page}`)

    petActions.all(page)
  }

  goToNextPage () {
    if (this.state.pets.length === 0) {
      return
    }

    let page = this.state.page

    if (this.state.pets.length < page * 10) {
      return
    }

    page++

    this.setState({
      page
    })

    this.props.history.push(`/?page=${page}`)

    petActions.all(page)
  }

  render () {
    let pets = 'No pets avaliable'
    if (this.state.pets.length > 0) {
      pets = this.state.pets.map(pet => (
        <div key={pet.id}>
          <img className='petImage' src={pet.image} alt={'img'} />
          <br />
          <Link to={`/pets/details/${pet.id}`}>
            {pet.id} - {pet.name}
          </Link>
          <hr />
        </div>
      ))
    }

    return (
      <div>
        <h1>All pets</h1>
        {pets}
        <div>
          <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
          <button onClick={this.goToNextPage.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default ListPetsPage
