import { useEffect, useState } from "react";
import api from "../api/api"
import { environment } from "../environmets/environment";

const { TOKEN } = environment

export const useGifs = (categoria:string)=>{

    const [imagenes, setImagenes] = useState<any[]>([]);
    const [cargando, setCargando] = useState( true );

    const consultarGifs = async():Promise<void> =>
    {
       const respuesta:any = await api.get(`gifs/search?api_key=${TOKEN}&q=${ categoria }&limit=10`);
       const apiImagenes = respuesta.data.data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
   
       setImagenes(apiImagenes);
       setCargando(false);
    }

    useEffect( () => {
        consultarGifs();
    }, []);


    return{
        cargando,
        imagenes
    }
}