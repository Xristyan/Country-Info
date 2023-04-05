import classes from "./Header.module.css";
import HeaderForm from "./HeaderForm";
import React, { useState, useContext } from "react";
import useHttp from "../hooks/use-http";
import errorContext from "../store/ErrorContext";

const Header = (props) => {
  const ctx = useContext(errorContext);
  const { getAllContries, isLoading } = useHttp();

  const resetHandler = () => {
    props.onReset();
  };
  const countryDataHandler = (data) => {
    console.log(data);
    props.onDataHandle(data);
  };
  const requestHttp = (name) => {
    getAllContries(
      { url: `https://restcountries.com/v3.1/name/${name}` },
      countryDataHandler
    );
  };

  return (
    <div className={classes.headercontainer}>
      <header className={classes.header}>
        <div></div>
        <div className={classes.titleSearch}>
          <h1 onClick={resetHandler} className={classes.h1}>
            <span className={classes.span}> ContriesINFO </span>
          </h1>

          <HeaderForm isLoading={isLoading} onRequestHttp={requestHttp} />
        </div>
      </header>
      <div
        className={`${classes.errorcontainer} ${ctx.error && classes.invalid}`}
      >
        {ctx.error && "country not found"}
      </div>
    </div>
  );
};
export default Header;
