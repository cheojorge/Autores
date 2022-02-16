import React, { useContext } from 'react'
import { Error } from '../components/Error'
import Form from '../components/Form'
import { Header } from '../components/Header'
import { myContext } from '../context/myContext'
export const Update = () => {
  const { idExists } = useContext(myContext)
  return (
    <div>
      {
        idExists
          ? <>
            <Header page={'EDIT'} />
            <Form />
          </>
          : <Error />

      }


    </div>
  )
}
