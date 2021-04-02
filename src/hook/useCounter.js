import { useState } from "react"

export const useCounter = (valueDefoult = 10) => {
    const [counter, setCounter] = useState(valueDefoult)
    
    const sum = ( factor ) => {
        setCounter(counter + factor)
    }

    const subtract = ( factor ) => {
        setCounter(counter - factor)
    }

    const reset = () => {
        setCounter(valueDefoult)
    }

    return{
        counter,
        sum,
        subtract,
        reset,
    }
}
