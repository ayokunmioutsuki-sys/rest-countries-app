import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const NavBar = () => {
  return (
    <div className="bg-element flex justify-between items-center px-20 py-8 text-color shadow-md">
      <Link to="/" className=" font-semibold text-[22px] decoration-none">
        Where in the world
      </Link>
      <DarkMode />
    </div>
  );
};

export default NavBar;
