import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import petActions from '../actions/PetActions'
import PetData from '../data/PetData'

class PetStore extends EventEmitter {
  create (pet) {
    PetData
      .create(pet)
      .then(data => this.emit(this.eventTypes.PET_CREATED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case petActions.types.CREATE_PET: {
        this.create(action.pet)
        break
      }
      default:
        break
    }
  }
}

let petStore = new PetStore()
petStore.eventTypes = {
  PET_CREATED: 'pet_created'
}

dispatcher.register(petStore.handleAction.bind(petStore))
export default petStore
