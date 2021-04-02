import React, { useEffect, useState } from 'react'
import './counter.css'
import { Message } from './Message';
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name :'',
        email: ''
    });
    const { name, email } = formState;
    useEffect (()=>{
        // console.log('hey!')
    },[]);
    useEffect (()=>{
        // console.log('hey, hay cambios en el formulario!')
    },[formState]);
    useEffect (()=>{
        // console.log('hey, hay cambios en el campo e-mail!')
    },[email]);
    const handleImputChange = ({ target }) =>{ 
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    }
    return (
        <>
            <h3>useEffect</h3>
            <hr />
            <div  className='form-group'>
                <input 
                    type='text'
                    name= 'name'
                    className = 'form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleImputChange }
                />
                <input 
                    type='text'
                    name= 'email'
                    className = 'form-control'
                    placeholder='example@correo.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleImputChange }
                />
            </div >
            <br />
            { ( name === '123' ) && <Message /> }
        </>
    )
}
