import { useGifs } from '../hooks';
import { Item } from './Item';
import React from 'react';

export type GridProps ={
    categoria:string,
}

export const Grid = ({ categoria }) => {

   const {cargando,imagenes } =  useGifs(categoria);
  
    return (
        <>
            <h3>{ categoria }</h3>
            {
                cargando && ( <h2>Cargando...</h2> )
            }
            
            <div className="card-grid">
                {
                    imagenes.map( ( imagen ) => (
                        <Item 
                            key={ imagen.id } 
                            { ...imagen }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
