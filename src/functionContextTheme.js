import React, { useContext } from "react";

import { useTheme, useThemeUpdate } from "./ThemeProvider";

export default function FunctionContext() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  console.log(typeof toggleTheme)

  const themeStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black"
  }
  return (
      <div>
        <div style={themeStyle}>hello world</div>
        <button onClick={toggleTheme}> toggle theme</button>
      </div>
  );
}
