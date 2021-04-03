import { useState } from 'react'
import PropTypes from 'prop-types';

export const useForm = ( elementsForm = {}, array = [] ) => {
    const [elementForm, setElementForm] = useState(elementsForm)
    
    const handleImputChange = (e) =>{
        const { target } = e;
        setElementForm({
            ...elementForm,
            [target.name]:target.value
        });
         const valueInput = array.find( input => input.name === target.name );
         if ( !valueInput ) return;
         const { require, name } = valueInput
         if ( require && target.value.length < 1 ) console.log(`Campo ${name} esta vacio`);
    }
    return ( [ elementForm, handleImputChange ] );
}

useForm.propTypes = {
    elementsForm: PropTypes.object.isRequired,
    array: PropTypes.array.isRequired
}