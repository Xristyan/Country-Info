import classes from "./CountryItem.module.css";
import React, { useState } from "react";
const CountryItem = (props) => {
  // const [showInfo, setShowInfo] = useState(false);
  // const showInfoHandler = () => {
  //   setShowInfo(true);
  // };
  // const hideInfoHandler = () => {
  //   setShowInfo(false);
  // };
  const showMap = () => {
    props.showMap();
    props.onLatlngHandler(props.latlng);
  };
  return (
    <div
      // onMouseEnter={showInfoHandler}
      // onMouseLeave={hideInfoHandler}
      onClick={showMap}
      className={classes.item}
    >
      <img className={classes.pic} src={props.flag} />
      {/* {showInfo && ( */}
      <div className={classes.info}>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.region}>{props.region}</p>

        <ul className={classes.ul}>
          <li>
            💰{" "}
            {props.currency[0].charAt(0).toUpperCase() +
              props.currency[0].slice(1)}
          </li>
          <li>🚶‍♂️ {(props.population / 1000000).toFixed(2)}M</li>
          <li>🗣 {props.language}</li>
        </ul>
      </div>
    </div>
  );
};
export default CountryItem;
