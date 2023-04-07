import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import CountriesSection from "./components/contriesSection/CountriesSection";
import useHttp from "./components/hooks/use-http";
import usePagination from "./components/hooks/use-pagination";

import Map from "./components/Map/Map";
function App() {
  const [reset, setReset] = useState(false);
  const [countries, setCountries] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [latlng, setLatLng] = useState([15.5, -90.25]);
  const countriesDataHandler = (data) => {
    const countriesArray = data.map((country, i) => {
      return {
        id: i,
        name: country.name.common,
        language: country.languages
          ? Object.values(country.languages)[0]
          : "none",
        flag: country.flags.png,
        population: country.population,
        region: country.region,
        currencies: country.currencies
          ? Object.values(country.currencies)[0].name
          : "none",
        latlng: country.latlng,
      };
    });
    setCountries(countriesArray);
  };
  const { getAllContries, isLoading } = useHttp();

  const resetHandler = () => {
    setReset((prev) => {
      return !prev;
    });
  };
  useEffect(() => {
    getAllContries(
      { url: "https://restcountries.com/v3.1/all" },
      countriesDataHandler
    );
  }, [getAllContries, reset]);
  const showMapHandler = () => {
    setShowMap(true);
  };
  const hideMapHandler = () => {
    setShowMap(false);
  };
  const latlngHandler = (cords) => {
    setLatLng(cords);
  };
  return (
    <React.Fragment>
      {showMap && <Map latlng={latlng} onClose={hideMapHandler} />}
      <Header onReset={resetHandler} onDataHandle={countriesDataHandler} />
      <CountriesSection
        showMap={showMapHandler}
        onLatlngHandler={latlngHandler}
        isLoading={isLoading}
        countries={countries}
      />
    </React.Fragment>
  );
}

export default App;
