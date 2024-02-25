
import React, { useState } from "react";

export type AddCategoryProps =
{
    onAddCategory : (categoria:string, limite: number)=>void 
}

export const AddCategory:React.FC<AddCategoryProps> = ({ onAddCategory }) => {

    const [ inputValor, setInputValor] = useState<string>('');
    const [ inputLimite, setInputLimite] = useState<number>(12);

    const onInputChange = ({ target }) => {
        setInputValor( target.value );
    }
    const onInputChangeNumber = ({ target }) => {
        setInputLimite( target.value );
    }


    const onSubmit = ( event ):void => 
    {
        event.preventDefault();
        console.log("dasdas")
        if( inputValor.trim().length <= 1) return;
        setInputValor('');
        onAddCategory( inputValor.trim(),inputLimite);
    }

    return (
        <form className="form" onSubmit={ onSubmit }>
            <input 
                id="buscar"
                type="text"
                placeholder="Buscar gifs"
                value={ inputValor }
                onChange={ onInputChange }
            />

            <input className="btnBuscar"  id="cantidad" type="submit" value="Buscar" />

            <div className="content_limite">
                <label className="cantidad" htmlFor="cantidad">Cantidad de Gifs:</label>
                <input className="limite" type="number" value={inputLimite} min={12} max={50} onChange={onInputChangeNumber} />
            </div>
       
        </form>
    )
}