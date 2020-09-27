import {connect} from "react-redux"
import Home from "../components/Home"

const mapStateToProps = (state)=>{
  return {
    loggedIn : state.isLoggedIn,
    businesses : state.businesses
  }
}

export default connect(mapStateToProps)(Home)