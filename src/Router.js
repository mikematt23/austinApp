import React,{Component} from 'react'
import {Switch, Route, Redirect} from "react-router"
import Home from './containers/Home'
import Login from "./containers/Login"
import LoggedInList from "./containers/LoggedInList"
import LoggedInBusiness from "./containers/LoggedInBusiness"
import AddBusiness from "./containers/AddBusiness"
import Business from "./containers/Business"
import cookie from 'cookie'


const createCookie = ()=>{
  const cookies = cookie.parse(document.cookie)
  return cookies['loggedIn'] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => createCookie()
          ? <Component {...props} />
          : <Redirect to="/login" />}
      />
  )
}

const Router = (props)=>{
  return (
    <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/business/:id" component={Business}/>
      <ProtectedRoute path = "/areLoggedIn" component={LoggedInList}/>
      <ProtectedRoute path ="/loggedIn/business/:id" component={LoggedInBusiness}/>
      <ProtectedRoute path = '/add' component ={AddBusiness}/>
    </Switch>
  )
}

export default Router