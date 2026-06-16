import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropDrownProps {
  dropDrownFn: (value: string) => void;
}

const DropDrown: React.FC<DropDrownProps> = ({
  dropDrownFn,
}: DropDrownProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] =
    useState<string>("Filter by Region");
  const regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <div
        onClick={() => setClicked(!clicked)}
        className="bg-element flex items-center w-50 justify-between py-3 shadow-5m px-5 rounded-md md cursor-pointer"
      >
        <p>{selectedRegion}</p>
        <RiArrowDropDownLine
          className={`transform ${clicked ? "rotate-180" : "rotate-0"} transition`}
        />
        <RiArrowDropDownLine />
      </div>
      {clicked && (
        <div className="bg-element font-light py-3 shadow-sm cursor-pointer flex flex-col gap-2 text-sm rounded-md px-5 w-50">
          {regions.map((region) => {
            return (
              <p
                onClick={() => [
                  setSelectedRegion(
                    region === "..." ? "Filter by Region" : region,
                  ),
                  dropDrownFn(region),
                ]}
                key={region}
              >
                {region}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDrown;
