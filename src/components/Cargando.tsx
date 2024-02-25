import React from 'react';

export const Cargando:React.FC = () => {

   
    return (
        <div id="contenedor">
        <div className="contenedor-loader">
          <div className="rueda"></div>
        </div>
        <div className="cargando">Cargando...</div>
        
      </div>
    )
}