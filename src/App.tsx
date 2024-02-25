import { useState } from 'react'
import './App.css'
import React from 'react'
import { AddCategory } from './components'
import { Grid } from './components/Grid'

const App:React.FC =() => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);
  const [ limite, SetLimite ] = useState(12);

  const onAddCategory = ( newCategory:string, limite :number ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory]);
    SetLimite(limite);
}

  return (
        <>
             <h1 className='titulo'>Tarea 1</h1>
             <AddCategory onAddCategory={(valor,limite)=>onAddCategory(valor,limite)} />
             { 
                categories.map( ( category ) => (
                    <Grid 
                        key={ category } 
                        categoria={ category }
                        limite={limite}
                        />
                ))
              }

          </>
       )
}

export default App
