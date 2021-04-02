import React from 'react'
import { useCounter } from '../../hook/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {
    const { counter, sum, subtract, reset } = useCounter(100);
    return (
        <div>
            <h1> Counter With Hook: { counter }</h1>
            <hr />
            <button onClick={ () => { sum(2) } } className='btn'>+1</button>
            <button onClick={ reset } className='btn'>Reset</button>
            <button onClick={ () => { subtract(1) } } className='btn'>-1</button>
        </div>
    )
}
