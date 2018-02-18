import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ListPetsPage from '../../pets/ListPetsPage'
import LoginPage from '../../users/LoginPage'
import LogoutPage from '../../users/LogoutPage'
import RegisterPage from '../../users/RegisterPage'
import CreatePetPage from '../../pets/CreatePetPage'
import PetDetailsPage from '../../pets/PetDetailsPage'
import CreateCommentPage from '../../pets/CreateCommentPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListPetsPage} />
    <Route path='/pets-system-app' exact component={ListPetsPage} />
    <Route path='/pets-system-app/users/register' component={RegisterPage} />
    <Route path='/pets-system-app/users/login' component={LoginPage} />
    <PrivateRoute path='/pets-system-app/users/logout' component={LogoutPage} />
    <PrivateRoute path='/pets-system-app/pets/add' component={CreatePetPage} />
    <PrivateRoute path='/pets-system-app/pets/add' component={CreatePetPage} />
    <PrivateRoute path='/pets-system-app/pets/:id/comments/create' component={CreateCommentPage} />
    <PrivateRoute path='/pets-system-app/pets/details/:id' component={PetDetailsPage} />
  </Switch>
)

export default Routes
