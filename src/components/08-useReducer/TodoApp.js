import React, { useEffect, useReducer } from 'react';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { FormAddTodo } from './FormAddTodo';

import './styles.css';

export const TodoApp = () => {
    const init = () => JSON.parse( localStorage.getItem('todos') ) || [];
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const handleRemove = ( idTodo ) => {
        const action = {
            type: 'remove',
            payload : idTodo,
        }
        dispatch( action );
    }
    const handleToggle = ( idTodo ) => {
        dispatch({
            type: 'toggle',
            payload : idTodo,
        });
    }
    const addTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload : newTodo,
        });
    }
    return (
        <div>
            <h1>TodoApp ( { todos?.length } )</h1>
            <hr />
            <div className="row">
                <div className="col-7">  
                    <TodoList 
                        todos={ todos }
                        handleRemove= { handleRemove }
                        handleToggle ={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    <FormAddTodo 
                        addTodo={ addTodo }
                    />
                </div>
            </div>
        </div>
    )
}
