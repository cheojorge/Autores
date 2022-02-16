import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const myContext = createContext();

export const MyProvide = ({children}) => {

    const [authors, setAuthors] = useState([])
    const [errorNew, setErrorNew] = useState("")
    const [valid, setValid] = useState("")
    const [idExists, setIdExists] = useState(true)

    const navigate = useNavigate();

    const deleteAuthor = (item) => {
        axios.delete(`http://localhost:8000/api/authors/${item._id}`)
        .then(res => {
            setAuthors(authors.filter(author => author._id !== item._id))
            alert(`Delete ${item.name}`)
          })
    }
    const createAuthor = (name) => {
        axios.post(`http://localhost:8000/api/authors`,{
            name
        })
            .then(res => {
                setAuthors([...authors,res.data])
                alert("New Author create")
                setErrorNew('')
                navigate('/')
            })
            .catch(err => {
                setErrorNew(err.response.data.errors.name.message)
                setValid('is-invalid')
            })
        
        
    }

    const updateAuthor = (id, name) => {
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name
        })
            .then(res => {
                alert("Author edited")
                setErrorNew('')
                navigate('/')
            })
            .catch(err => {
                setErrorNew(err.response.data.errors.name.message)
                setValid('is-invalid')
            })
    }
    return (
        <myContext.Provider 
            value={
                {
                    authors, 
                    setAuthors, 
                    createAuthor, 
                    deleteAuthor, 
                    updateAuthor,
                    errorNew,
                    setErrorNew,
                    valid,
                    setValid,
                    idExists,
                    setIdExists
                }
            }
        >
            {children}
        </myContext.Provider>
    )
}