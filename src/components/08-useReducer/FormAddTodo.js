import React from 'react'
import { useForm } from '../../hook/useForm'

export const FormAddTodo = ({ addTodo }) => {
    const [ { description }, handleImputChange, resetForm ] = useForm( {
        description:''
    } );

    const handleSubmit = ( e ) =>{
        e.preventDefault()
        if( description.trim().length <= 1 ) return;
        const newTood = { 
            id: Date.now(),
            desc: description,
            done: false
        }
        addTodo( newTood );
        resetForm();
    }
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Que deseas aprender ?"
                    autoComplete="off"
                    value={ description }
                    onChange= { handleImputChange }
                />
                <button type="submit"className="btn btn-outline-success mt-1">Agregar</button>
            </form>
        </>
    );
}