import { root } from "postcss";
import React, {useState, useEffect} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default DarkModeToggleButton => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect(() => {
    const root = window.document.documentElement

    setTimeout(() => {
      if(isDarkMode){
        root.classList.remove('light')
        root.classList.add('dark')
      }else{
        root.classList.remove('dark')
        root.classList.add('light')
      }
    }, 400)
  });

  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
      className="mx-8"
    />
  );
};