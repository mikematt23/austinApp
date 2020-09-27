import {connect} from "react-redux"
import LoggedInList from "../components/LoggInList"
import {removeBusiness} from "../redux/actions"


const mapStateToProps = (state)=>{
  return {
    businesses : state.businesses,
    userName : state.userName
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
   removeBusiness: (index)=>dispatch(removeBusiness(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoggedInList)