import React from "react"
import {Container, Paper, Chip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const LoggedInBusiness = (props)=>{
  let id = props.match.params.id
  let theBiz = props.businesses.filter((business)=>{
    if(business.id == id){
      return business
    }
  })
  console.log(theBiz)
  return (
    <Container>
        <div>
         <h6>Logged In, Hello {props.userName}</h6>
        </div>
      <Paper>
        <h1>{theBiz[0].name}</h1>
        <h4>{theBiz[0].description}</h4>
        <h6>{theBiz[0].hours}</h6>
        <h6>{theBiz[0].address.street}</h6>
      </Paper>
    </Container>
  )
}

export default LoggedInBusiness