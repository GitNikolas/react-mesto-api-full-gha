import React from "react";

const useForm = () => {
  const [formState, setFormState] = React.useState({
    isValid: false,
    isDirty: false,
    errors: {} ,//объект ошибок
    dirtyFields: {} // Объект полей
  });

  function register () {

  }

  function validate () {

  }

  function handleSubmit () {

  }

  function getValues () {

  }
  function setValue () {

  }
}

export default useForm;
