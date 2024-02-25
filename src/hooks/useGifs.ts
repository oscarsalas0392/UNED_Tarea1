import { useEffect, useState } from "react";
import api from "../api/api"
import { environment } from "../environmets/environment";
import { respuestaSearch } from "../interfaces";
import { Status } from "../Enums";

const { TOKEN } = environment

export const useGifs = (categoria:string,limite:number)=>{

    const [imagenes, setImagenes] = useState<any[]>([]);
    const [cargando, setCargando] = useState( true );
    const [mensajeError, setMensajeError] = useState<string>("");

    const consultarGifs = async():Promise<void> =>
    {
        try
        {
            const respuesta:respuestaSearch = await api.get(`gifs/search?api_key=${TOKEN}&q=${ categoria }&limit=${limite}`);

            if(respuesta.status == Status.ok)
            {
                const {data} = respuesta.data;
            
                const apiImagenes = data.map( ({id,title,images}) => ({
                     id: id,
                     title: title,
                     url: images.downsized_medium.url
                 }));
            
                setImagenes(apiImagenes);
                setCargando(false);
            }

            if(respuesta.status == Status.unauthorized)
            {
                setMensajeError("Ocurrió un problema al consultar los gifs, por favor vuelva intentarlo");
            }
      
        }
        catch(error:any)
        {
            setCargando(false);
            setMensajeError("Ocurrió un problema al consultar los gifs, por favor vuelva intentarlo");
        }

    }

    useEffect( () => {
        consultarGifs();
    }, []);


    return{
        cargando,
        imagenes,
        mensajeError
    }
}