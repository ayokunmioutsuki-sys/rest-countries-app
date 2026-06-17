import React from "react";
import type { Country } from "../App";
import Eachcountry from "../components/Eachcountry";
import { useLocation, useParams } from "react-router-dom";

interface countryDetailsProps {
  details: Country[];
}

const CountryDetails: React.FC<countryDetailsProps> = ({ details }) => {
  const { countryName } = useParams();
  const { state } = useLocation();

  const findCountry: Country =
    state?.country ||
    details.find((country) => {
      return country.name === decodeURIComponent(countryName ?? "");
    });
  return (
    <div>
      <Eachcountry detail={findCountry} />
    </div>
  );
};

export default CountryDetails;
