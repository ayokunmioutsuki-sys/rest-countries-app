import React from "react";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDrown";
import type { Country } from "../App";
import Countries from "../components/Countries";

interface HomePageProps {
  theWorld: Country[];
  searchFn: (value: string) => void;
  dropDrownFn: (value: string) => void;
}
// Ts:props are fully typed,so if App.tsx passes the wrong type-say
// a number instead of a string for searchFn-TypeScript will flag it
// before the code even runs.

const HomePage: React.FC<HomePageProps> = ({
  theWorld,
  searchFn,
  dropDrownFn,
}) => {
  return (
    <div className="px-4 md:px-20 py-6 md:py-12 bg-body">
      <div className="flex flex-col md:flex-row gap-6 md:justify-between md:items-center ">
        <SearchBar searchFn={searchFn} />
        <DropDown dropDrownFn={dropDrownFn} />
      </div>
      <Countries theWorld={theWorld} />
    </div>
  );
};

export default HomePage;
