import classes from "./HeaderForm.module.css";
import React, { useRef } from "react";
import Button from "../UI/Button";
const HeaderForm = (props) => {
  let currentText = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentText.current.value.trim().length === 0) {
      return;
    }

    props.onRequestHttp(currentText.current.value);
    currentText.current.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input ref={currentText} className={classes.input} type="text" />
      <Button className={classes.btnF}>
        <span className={classes.span}>
          {props.isLoading ? "loading..." : "search"}{" "}
        </span>
      </Button>
    </form>
  );
};
export default HeaderForm;
