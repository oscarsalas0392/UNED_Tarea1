import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2'
import { useGifs } from '../hooks';
import { Cargando } from './Cargando';
import { Item } from './Item';
import React, { useEffect, useState } from 'react';

export type GridProps ={
    categoria:string,
    limite:number
}

export const Grid = ({ categoria,limite }) => {

   const {cargando,imagenes,mensajeError } =  useGifs(categoria,limite);
 
   const showSwal = () => {
    Swal.fire({
        title: "Error",
        text: mensajeError,
        icon: "error"
      });
  }

  useEffect(()=>{
    console.log(mensajeError)
    if(mensajeError !== "") showSwal();
  },[mensajeError])
  
    return (
        <>
            <h3 className='tituloCategoria'>Categoría buscada: { categoria }</h3>
            {
                cargando && <Cargando/>
            }
            
            <div className="card-grid">
                {
                  categoria &&   imagenes.map( ( imagen ) => (
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
