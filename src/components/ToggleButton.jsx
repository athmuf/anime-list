import { useContext, useState } from "react";
import { DarkModeContext } from "../context";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext)
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setDarkMode(!darkMode)
  };
  
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center cursor-pointer" onClick={handleToggle}>
          <div className="relative">
            <input type="checkbox" className="sr-only"></input>
            <div className={`block bg-${darkMode ? "gray-400" : "jade"} w-14 h-8 rounded-full`}></div>
            <div
            className={`dot absolute left-1 top-1 ${
              isChecked ? 'bg-white' : 'bg-white translate-x-full'
            } w-6 h-6 rounded-full transition`}
          ></div>
          </div>
          <div className={`ml-3 text-gray-700 font-medium text-${darkMode ? "jade" : "white"}`}>{`Dark Mode: ${isChecked ? 'OFF' : 'ON'}`}</div>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
