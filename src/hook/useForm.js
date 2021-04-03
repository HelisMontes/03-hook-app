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
         /**
          * Otra forma de validar si el array retorna un objeto
          * _____________________________________________________
          * Si el array no retorna un obejto valueInput = undefined,
          * por ende nos da un error.
          * Para cambiar el valor de un undefined se usa !
          * Si valueInput = undefined. 
          * !valueInput = true.
          * !!valueInput = false.
          * @destructuring { require, name } = !!valueInput && valueInput
          * @description !!valueInput ? creo las variables : no creo las variables
          */
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