import React from 'react';

const Input = ({name, value, onChange,placeholder}) => {
  return ( <input type='text'
  onChange={ onChange }
name={ name } value={ value } placeholder={ placeholder } /> );
}
 
export default Input;