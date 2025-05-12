import { useState } from "react";

export function useInput() {
  const [validate, setValidate] = useState(true);
  const [editedState, setEditedState] = useState(false);

  function handleEditedState(state) {
    setEditedState(state);
  }

  function handleValidate(state) {
    setValidate(state);
  }

  function handleReset() {
    setEditedState(false);
    setValidate(true);
  }

  //   const validation = validationFn(value);

  return {
    handleEditedState,
    handleValidate,
    handleReset,
    error: editedState && !validate,
  };
}
