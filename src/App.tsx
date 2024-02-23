import { useState } from 'react'
import './App.css'
import React from 'react'
import { AddCategory } from './components'
import { Grid } from './components/Grid'

const App:React.FC =() => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);
 
  const onAddCategory = ( newCategory:string ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
}

  return (
        <>
             <h1>GigExpertApp</h1>
             <AddCategory onAddCategory={(valor)=>onAddCategory(valor)} />
             { 
                categories.map( ( category ) => (
                    <Grid 
                        key={ category } 
                        categoria={ category } />
                ))
              }

          </>
       )
}

export default App
