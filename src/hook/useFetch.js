import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    const isMounted = useRef( true )
    /*
        Usamos el useRef si el usuario cierra el componente antes
        que este haya cambiado el estado, de esta forma
        evitamos fujas de memorias y otros errores.

        Ejemplo: Si al consultar una nueva cita, la API tarde en dar
        respuesta y el usuario cancela la orden, nos puede dar un error 
    */
    const [state, setState] = useState({
        data: null, 
        loading: true, 
        error: null
    });
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    useEffect(() => {
        setState({   
            data: null, 
            loading: true, 
            error: null
        })
        fetch(url)
            .then( result => result.json() )
            .then( data => {
                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
    }, [url]);
    return state;
}