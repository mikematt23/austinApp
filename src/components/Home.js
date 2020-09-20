import React from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core"
import {Link} from 'react-router-dom'




const Home = (props)=>{
    return(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business,idx)=>{
             return(
                 <TableRow key = {business.id}> 
                   <TableCell><Link to = {`/business/${business.id}`}>{business.name}</Link></TableCell>
                   <TableCell>{business.description}</TableCell>
                   <TableCell>{business.address.street}</TableCell>
                 </TableRow>
             )
          })}
        </TableBody>
      </Table>
    )
   
  }
  

export default Home