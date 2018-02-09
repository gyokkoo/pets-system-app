import Data from './Data'

const baseUrl = 'pets'

class PetData {
  static create (pet) {
    window.alert(`${baseUrl}/create`)
    return Data.post(`${baseUrl}/create`, pet, true)
  }
}

export default PetData
