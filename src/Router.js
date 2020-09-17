import React,{Component} from 'react'
import {Switch, Route, Redirect} from "react-router"
import Home from './containers/Home'
import Login from "./containers/Login"
import LoggedInList from "./components/LoggInList"
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
  console.log(props)
  return (
    <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/business/:id" component={Business}/>
      <ProtectedRoute path = "/areLoggedIn" component={LoggedInList}/>
    </Switch>
  )
}

export default Router