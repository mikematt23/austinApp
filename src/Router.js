import React from 'react'
import {Switch, Route} from "react-router"
import Home from './containers/Home'
import Login from "./components/login"
import Business from "./containers/Business"


const Router = ()=>{
  return (
    <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/business/:id" component={Business}/>
    </Switch>
  )
}

export default Router