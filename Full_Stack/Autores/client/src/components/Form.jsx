import { Paper } from '@material-ui/core'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { myContext } from '../context/myContext'


export default function Form() {
    let id = useParams().id;

    const [name, setName] = useState("")
    const { authors, createAuthor, updateAuthor,errorNew,setErrorNew, valid ,setValid, setIdExists} = useContext(myContext)
    
    useEffect(() => {
        if (id) {
            if (authors.find(author => author._id === id)) {
                let editName = authors.find(author => author._id === id).name
                setName(editName)
            } else {
                setIdExists(false)
            }
        }
    }, [id])


    const handlerOnSubmit = (e) => {
        e.preventDefault();
        id ? updateAuthor(id, name) : createAuthor(name)
        setErrorNew('')
    }

    const handlerOnChange = e =>{
        setValid('') 
        setName(e.target.value)
    }
    return (
        <Paper>
            <form className="row g-4 mt-1">
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">NAME:</label>
                    <div className="col-sm-10 mb-3">
                        <input
                            onChange={handlerOnChange}
                            type="text"
                            className={`form-control ${valid}`} 
                            id="name"
                            value={name}
                        />
                            <div className="invalid-feedback">
                                {errorNew}
                            </div>
                    </div>
                    <div className="col-auto text-center">
                        <Link to='/' onClick={()=> {setErrorNew('');setValid('') }} type="button" className="btn btn-outline-danger me-3">CANCEL</Link>
                        <button onClick={handlerOnSubmit} type="button" className={`btn btn-outline-success `}>SUBMIT</button>
                    </div>

                </div>
            </form>
        </Paper>

    )
}


