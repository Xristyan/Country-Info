import classes from "./CountriesSection.module.css";
import CountryItem from "./CountryItem";
import Spinner from "../UI/Spinner";
import React from "react";
import Button from "../UI/Button";
import usePagination from "../hooks/use-pagination";
const CountriesSection = (props) => {
  const { pagination, pageUp, pageDown } = usePagination(props.countries);

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
          ←
        </Button>
        <Button className={classes.btn} onClick={pageUp}>
          →
        </Button>
      </div>
    </React.Fragment>
  );
};
export default CountriesSection;
