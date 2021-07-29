import React from 'react';

const Input = ({name, value, type, placeholder}) => {
  return ( <input type={type}
name={ name } value={ value } placeholder={ placeholder } /> );
}
 
export default Input;