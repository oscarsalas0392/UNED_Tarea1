import React from "react"


export type ItemProps ={
    url:string,
    titulo:string
}

export const Item:React.FC<ItemProps> = ({url, titulo}) => {

   
    return (
        <div className="card">
            <img src={ url } alt={ titulo } />
            <p>{ titulo }</p>
        </div>
    )
}