import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/countryDetails";
import NavBar from "./components/NavBar";
import Allcountries from "./data.json";
import { useState } from "react";

export interface Currency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
export interface Flags {
  png: string;
  svg: string;
}

export interface Country {
  name: string;
  region: string;
  capital: string;
  population: number;
  subregion: string;
  nativeName: string;
  topLevelDomain: string[];
  borders?: string[];
  currencies: Currency[];
  languages: Language[];
  flags: Flags;
}

function App() {
  const [allCountries] = useState<Country[]>(Allcountries as Country[]);
  const [filterCountries, setFilterCountries] = useState<Country[]>([]);

  // filter By Search
  const filterBySearch = (search: string) => {
    const searchedCountries = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(search);
    });
    setFilterCountries(searchedCountries);
  };

  // filter
  const filterByRegion = (region: string) => {
    const filteredCountries = allCountries.filter((country) => {
      return country.region === region;
    });

    setFilterCountries(filteredCountries);
  };
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          {/* HomePage typed in its file; cast to any here to allow prop passing */}
          {(() => {
            return (
              <Route
                path="/"
                element={
                  <HomePage
                    theWorld={
                      filterCountries.length > 0
                        ? filterCountries
                        : allCountries
                    }
                    searchFn={filterBySearch}
                    dropDrownFn={filterByRegion}
                  />
                }
              />
            );
          })()}
          <Route
            path="/details/:countryName"
            element={<CountryDetails details={allCountries} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
