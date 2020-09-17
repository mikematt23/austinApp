import React from "react"
import {Container, Paper, Chip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const Business = (props)=>{
  let id = props.match.params.id
  console.log(props)
  let theBiz = props.businesses.filter((business)=>{
    if(business.id == id){
      return business
    }
  })
  console.log(theBiz)
  return (
    <Container>
      <Paper>
        <h1>{theBiz[0].name}</h1>
        <h4>{theBiz[0].description}</h4>
        <h6>{theBiz[0].hours}</h6>
        <h6>{theBiz[0].address}</h6>
      </Paper>
    </Container>
  )
}

export default Business