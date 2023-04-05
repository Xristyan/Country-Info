import classes from "./CountriesSection.module.css";
import CountryItem from "./CountryItem";
import Spinner from "../UI/Spinner";
import React, { useState } from "react";
import Button from "../UI/Button";
const CountriesSection = (props) => {
  const [pagination, setPagination] = useState([0, 25]);
  const pageUp = () => {
    if (props.countries.length <= pagination[1]) return;
    setPagination((prevPag) => {
      return prevPag.map((el) => {
        return el + 25;
      });
    });
    console.log(pagination);
  };
  const pageDown = () => {
    if (pagination[0] === 0) {
      return;
    }
    setPagination((prevPag) => {
      return prevPag.map((el) => {
        return el - 25;
      });
    });
    console.log(pagination);
  };
  return (
    <React.Fragment>
      <section className={classes.section}>
        {props.isLoading && <Spinner />}
        {props.countries.slice(pagination[0], pagination[1]).map((country) => {
          return (
            <CountryItem
              key={country.id}
              id={country.id}
              flag={country.flag}
              currency={country.currencies.split(" ").slice(-1)}
              name={country.name}
              region={country.region}
              population={country.population}
              language={country.language}
              latlng={country.latlng}
              showMap={props.showMap}
              onLatlngHandler={props.onLatlngHandler}
            />
          );
        })}
      </section>
      <div className={classes.pagination}>
        <Button className={classes.btn} onClick={pageDown}>
          -
        </Button>
        <Button className={classes.btn} onClick={pageUp}>
          +
        </Button>
      </div>
    </React.Fragment>
  );
};
export default CountriesSection;
