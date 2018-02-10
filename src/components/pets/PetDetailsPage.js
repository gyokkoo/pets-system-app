import React, { Component } from 'react'

class PetDetailsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {
        bookId: '',
        title: '',
        author: '',
        description: '',
        imageUrl: '',
        addedByUser: ''
      }
    }
  }

  componentDidMount () {
    // let id = this.props.match.params.id
  }

  render () {
    return null
  }
}

export default PetDetailsPage
