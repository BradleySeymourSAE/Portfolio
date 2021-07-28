import { useState } from 'react';

export const useFormHook = (callback, initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    formData,
    handleOnChange,
    onFormSubmit
  };
};
