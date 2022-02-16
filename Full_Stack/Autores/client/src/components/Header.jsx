import { Paper } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'


export const Header = ({page}) => {
    let descrip = ""
    const renderButton = () =>{
        if(page === 'NEW'){
            descrip= "We have quotes by:"
            return <Link to={'/new'} className="btn btn-primary me-md-2">{page}</Link>
        }else if(page === 'HOME'){
            descrip = 'Add a new author:'
            return <Link to={'/'} className="btn btn-primary me-md-2">{page}</Link>
        }else{
            descrip = 'Edit this author'
            return <Link to={'/'} className="btn btn-primary me-md-2">HOME</Link>
        }
    }
  return (
        <Paper elevation={3}>
            <div className="card-header text-center fs-2">
                Favorite authors
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                { renderButton() }
            </div>
            <div className="card-header text-center mb-4">{descrip}</div>
               
            
            
        </Paper>
  )
}
