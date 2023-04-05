import React from "react";
const errorContext = React.createContext({
  error: false,
  setErrorHandler: () => {},
});
export default errorContext;
