import { useEffect, useState } from "react";
import api from "../api/api"
import { getEnvVariables } from '../helpers';

const { TOKEN } = getEnvVariables()

export const useGifs = (categoria:string)=>{

    const [imagenes, setImagenes] = useState<any[]>([]);
    const [cargando, setCargando] = useState( true );

    const consultarGifs = async():Promise<void> =>
    {
       const apiImagenes:any[] = await api.get(`/gifs/search?api_key=${TOKEN}=${ categoria }&limit=10`);
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