import React, { useState } from "react";
import errorContext from "./ErrorContext";
const ErrorProvider = (props) => {
  const [error, setError] = useState(null);
  const setErrorHandler = (value) => {
    setError(value);
  };

  const errorContextValues = {
    error: error,
    setErrorHandler: setErrorHandler,
  };
  return (
    <errorContext.Provider value={errorContextValues}>
      {props.children}
    </errorContext.Provider>
  );
};
export default ErrorProvider;
