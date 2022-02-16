import { Paper } from "@material-ui/core";
import axios from "axios";
import React from 'react'
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/myContext";
export const AuthorsList = () => {
    const { authors, setAuthors, deleteAuthor } = useContext(myContext)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [setAuthors])
    return (
        <Paper>
            <ol className="list-group list-group-numbered">
                {
                    authors?.map((author, index) => 
                        <li key ={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="fw-bold col-9">{author.name}</div>
                            <i onClick={() => deleteAuthor(author)} className="fa-solid fa-trash-can col-1"/>
                            <Link to={`/edit/${author._id}`} className="fa-solid fa-user-pen col-1"></Link>
                        </li>
                    )
                }
            </ol>
        </Paper>
    )
}
