import React from "react"
import Router from "../Router"
import {connect} from "react-redux"


const mapStateToProps = (state)=>{
  return{
    loggedIn:state.isLoggedIn
  }
}


export default connect(mapStateToProps)(Router)