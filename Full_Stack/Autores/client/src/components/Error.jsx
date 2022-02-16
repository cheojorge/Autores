import { Paper } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../context/myContext'


export const Error = () => {
    const { setIdExists } = useContext(myContext)
    return (
        <Paper elevation={3}>
            <div className='text-center'>
                <div className="alert alert-danger" role="alert">
                    Lo sentimos, pero no pudimos encontrar el autor que estás buscando. ¿Deseas agregar este autor a nuestra base de datos?
                </div>
                <Link to="/" onClick={() => setIdExists('true')} type="button" className="mb-3 btn btn-primary btn-sm ">HOME</Link>
                <Link to="/new" onClick={() => setIdExists('true')} type="button" className="mb-3 btn btn-success btn-sm ms-3">CREATE</Link>
            </div>
        </Paper>
    )
}
