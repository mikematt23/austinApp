import React from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell, Button, Container} from "@material-ui/core"
import {Link} from 'react-router-dom'

const LoggedInList = (props)=>{
  console.log(props)
  return (
    <Container>
      <div>
         <h6>Logged In, Hello {props.userName}</h6>
      </div>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {props.businesses.map((business,idx)=>{
            return(
              <TableRow key ={business.id}>
                <TableCell><Link to = {`/loggedIn/business/${business.id}`}>{business.name}</Link></TableCell>
                 <TableCell>{business.description}</TableCell>
                 <TableCell>{business.address.street}</TableCell>
                 <TableCell><Button onClick = {()=> props.removeBusiness(idx)}>Delete</Button>  </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  </Container>   
  )
}

export default LoggedInList