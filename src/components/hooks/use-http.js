import React, { useCallback, useState, useContext } from "react";
import errorContext from "../store/ErrorContext";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const useHttp = () => {
  const ctx = useContext(errorContext);
  const [isLoading, setIsLoading] = useState(false);
  const getAllContries = useCallback(async function (httpData, applyData) {
    setIsLoading(true);
    // setError(null);
    ctx.setErrorHandler(false);
    try {
      const res = await fetch(httpData.url);
      const response = await Promise.race([res, timeout(3)]);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      applyData(data);
    } catch (error) {
      console.log(error.message);
      ctx.setErrorHandler(true);
    }
    setIsLoading(false);
  }, []);
  return { getAllContries: getAllContries, isLoading: isLoading };
};
export default useHttp;
