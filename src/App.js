// import "./styles.css";

import React, { useState, useEffect, useCallback } from "react";
import FunctionContext from "./functionContextTheme";
// import List from "./List";
import ThemeProvider from "./ThemeProvider";

export default function App() {
  return (

    <ThemeProvider>
      <FunctionContext />
    </ThemeProvider>
  );
}
