import classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className={classes.spinnerPosition}>
      <div className={classes.dotspinner}>
        <div className={classes["dot-spinner__dot"]}></div>
        <div className={classes["dot-spinner__dot"]}></div>
        <div className={classes["dot-spinner__dot"]}></div>
        <div className={classes["dot-spinner__dot"]}></div>
        <div className={classes["dot-spinner__dot"]}></div>
        <div className={classes["dot-spinner__dot"]}></div>
        <div className={classes["dot-spinner__dot"]}></div>
        <div className={classes["dot-spinner__dot"]}></div>
      </div>
    </div>
  );
};
export default Spinner;
