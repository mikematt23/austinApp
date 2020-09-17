import {connect} from "react-redux"
import Home from "../components/Home"

const mapStateToProps = (state)=>{
  return {
    loggedIn : state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Home)