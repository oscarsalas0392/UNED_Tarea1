
import React, { useState } from "react";

export type AddCategoryProps =
{
    onAddCategory : (categoria:string)=>void 
}

export const AddCategory:React.FC<AddCategoryProps> = ({ onAddCategory }) => {

    const [ inputValor, setInputValor] = useState<string>('');

    const onInputChange = ({ target }) => {
        setInputValor( target.value );
    }

    const onSubmit = ( event ):void => 
    {
        event.preventDefault();
        if( inputValor.trim().length <= 1) return;

        setInputValor('');
        onAddCategory( inputValor.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValor }
                onChange={ onInputChange }
            />
        </form>
    )
}