import React from 'react'
import { AuthorsList } from '../components/AuthorsList'
import { Header } from '../components/Header'

export const Home = () => {
  return (
    <div>
      <Header page={'NEW'}/>
      <AuthorsList/>
    </div>
  )
}
