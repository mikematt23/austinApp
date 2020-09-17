import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import {Link} from 'react-router-dom'
import Business from '../containers/Business'

const Nav = (props)=>{console.log(props)
  
  if(props.loggedIn){
    return (
      <AppBar position="static">
      <Toolbar>
      <h3>Austin Race Tracks</h3>
      <div>
        <Link to= "/areLoggedIn">
          <h4>Listings</h4>
        </Link>
        <Link to ="/add">
          <h4>Add</h4>
        </Link>
        <Link>
          <h4>Log Out</h4>
        </Link>
      </div>
      </Toolbar>
    </AppBar>
    )
  }else{
    return(
      <AppBar position="static">
        <Toolbar>
          <h3>Austin Race Tracks</h3>
          <div>
            <Link to= "/">
              <h4>Listings</h4>
            </Link>
            <Link to="/login"> 
              <h4>Login</h4>
            </Link>
         </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Nav