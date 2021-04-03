import React from 'react'
import { useFetch } from '../../hook/useFetch'
import { useCounter } from '../../hook/useCounter'

import '../02-useEffect/counter.css'

export const MultiplesCustomHook = () => {
    const {counter, sum, reset }= useCounter( 1 )
    counter > 30 && reset()
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
    
    const { loading, data } = useFetch(url)
    const { author, quote } = !!data && data[0];
    /*
        Si data es difrente de null se hace una doble negacion !!data
        para que la data sea true y se haga la desestructuración 
    */
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-3"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                    className="btn btn-primary"
                    onClick={ () => sum ( 1 ) }
                >
                    Siguiente quote
            </button>
        </div>
    )
}
