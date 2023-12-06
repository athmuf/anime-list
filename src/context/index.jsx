import { createContext, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { rootReducer, initialState } from "../reducer";

export const AnimeContext = createContext(initialState);
export const DarkModeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    localStorage.setItem("my-collection", JSON.stringify(state.data));
  }, [state]);

  return (
    <AnimeContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimeContext.Provider>
  );
};

AnimeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
