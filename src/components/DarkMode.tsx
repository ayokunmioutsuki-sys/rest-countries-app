import { useState } from "react";
import { IoMoon } from "react-icons/io5";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? JSON.parse(storedMode) : false;
  });

  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    setDarkMode((prev) => !prev);
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("darkMode", JSON.stringify(!isLight));
  };

  return (
    <div
      onClick={handleThemeToggle}
      className="flex items-center gap-2 cursor-pointer"
    >
      <IoMoon />
      <p className="font-semibold text-[16px]">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </p>
    </div>
  );
};

export default DarkMode;
