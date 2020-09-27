import React from "react"
import {Container, Paper, Chip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SimpleMap from "./Map"


const Business = (props)=>{
  let location
  let id = props.match.params.id
  let theBiz = props.businesses.filter((business)=>{
    if(business.id == id){
      return business
    }
  })
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${theBiz[0].address.street},+${theBiz[0].address.city}+TX&key=AIzaSyCGK-b1c-qbiR6-9Jo9VkYUbokXfNinxUQ`
  fetch(url)
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data)
   return location = data.results[0].geometry.location
   
  })
 
  
  console.log(theBiz)
 window.setTimeout(console.log(location),6000)
  return (
    <Container>
      <Paper>
        <h1>{theBiz[0].name}</h1>
        <h4>{theBiz[0].description}</h4>
        <h6>{theBiz[0].hours}</h6>
        <h6>{theBiz[0].address.street}</h6>
        
      </Paper>
      <Paper>
         <SimpleMap location ={location}>
        </SimpleMap>
      </Paper>
    </Container>
  )
}

export default Business