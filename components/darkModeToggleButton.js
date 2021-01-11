import React, {useState, useEffect} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

// BUG: button's state doesnt correctly track between routes

const getDarkModeState = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('darkMode')
  }else{
    return false
  }
}

export default DarkModeToggleButton => {
  const [isDarkMode, setIsDarkMode] = useState(getDarkModeState())

  const changeTheme = () => {
    const root = window.document.documentElement
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('darkMode', !isDarkMode)
    
    if(!isDarkMode){
      root.classList.remove('light')
      root.classList.add('dark')
    }else{
      root.classList.remove('dark')
      root.classList.add('light')
    }
    
  }

  return (
    <DarkModeToggle
      //onChange={setIsDarkMode}
      onChange={changeTheme}
      checked={isDarkMode}
      size={50}
      className="mx-8 mt-2"
    />
  );
};