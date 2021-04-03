import React, { useEffect } from 'react'
import { useForm } from '../../hook/useForm';

import './counter.css'

export const FormWithCustomHook = () => {
    const [dataElementsForm, handleImputChange] = useForm({
        name :'',
        email: '',
        password:'',
    },[ {
            name: 'name',
            require: true,
            type: 'text'
        },
        {
            name: 'email',
            require: true,
            type: 'email'
        },
        {
            name: 'password',
            require: true,
            type: 'email'
        }
    ]);
    const { name, email, password } = dataElementsForm;
    useEffect(() => {
        console.log('Hey!, estas modificando el e-mail')
    }, [email]);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( dataElementsForm )
    }
    return (
        <form onSubmit={ handleSubmit }>
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
                <input 
                    type='password'
                    name= 'password'
                    className = 'form-control'
                    placeholder='********'
                    value={ password }
                    onChange={ handleImputChange }
                />
            </div >
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
    )
}
