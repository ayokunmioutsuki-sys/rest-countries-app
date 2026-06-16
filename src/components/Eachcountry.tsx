import React from "react";
import { HiOutlineArrowLeftEndOnRectangle } from "react-icons/hi2";
import type { Country } from "../App";
import { useNavigate } from "react-router-dom";

interface EachCountryProps {
  detail: Country;
}

const Eachcountry: React.FC<EachCountryProps> = ({ detail }) => {
  const navigate = useNavigate();

  const border = detail.borders
    ? detail.borders.map((b) => {
        return (
          <p key={b} className="bg-element px-6 py-2 shadow-md">
            {b}
          </p>
        );
      })
    : "No border countries";

  const currencies = detail?.currencies
    ? detail.currencies[0].name
    : "No currencies available";

  return (
    <div className="px-2 pb-50 text-color">
      <div
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        className="flex items-center w-30 justify-between shadow-md px-6 py-2 rounded-md cursor-pointer bg-element"
      >
        <HiOutlineArrowLeftEndOnRectangle />
        <p className="text-[16px]">Back</p>
      </div>
      {/* {=====================================================================} */}
      <div className="flex items-center w-ful gap-37.5 mt-16">
        <img
          src={detail.flags.png}
          alt={`Flag of ${detail.name}`}
          className="w-137.5 h-91.5"
        />

        <div className="flex-col w-full items-start text-start">
          <h2 className="text-[24px] font-extrabold">{detail.name}</h2>

          <div className="flex items-start gap-10 w-full justify-between">
            <div className="flex flex-col items-start gap-2.5 text-[16px]">
              <p>Native name: {detail.nativeName}</p>
              <p>Populaion: {detail.population.toLocaleString()}</p>
              <p>Region: {detail.region}</p>
              <p>Sub-region: {detail.subregion}</p>
              <p>Capital: {detail.capital}</p>
            </div>
            <div className="flex flex-col items-start gap-2.5 text-[16px]">
              <p>Top Level Domain: {detail.topLevelDomain?.join(", ")}</p>
              <p>Currencies: {currencies}</p>
              <p>
                Languages:
                {detail.languages?.map((l) => l.name).join(", ")}
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 
          text-[16px] mt"
          >
            <p>Border Countries</p>
            <div className="grid grid-cols-4 gap-4 items-center">{border}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eachcountry;
