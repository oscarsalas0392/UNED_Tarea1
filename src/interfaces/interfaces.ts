
export interface respuestaSearch {
    status:number,
    data:Data
}

export interface Data {
    data:Gifs[]
}

export interface Gifs {
    id:string,
    title:string
    images: Images
}

export interface Images {
    downsized_medium:DownSized
}

export interface DownSized {
    url:string
}