const validations = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name field is required';
  }
  if (!values.email){
    errors.email = 'Email field is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  } 
  if (!values.message) {
    errors.message = 'Message field is required';
  }
  return errors;
}

export default validations;