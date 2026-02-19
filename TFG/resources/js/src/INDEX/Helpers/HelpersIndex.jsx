import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const HelpersIndexContext = createContext();

export const HelpersIndexProvider = ({ children }) => {

  const [datos, setDatos] = useState([]);

  // Scroll
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <HelpersIndexContext.Provider
      value={{
        datos,
        setDatos,
        scrollToTop,
      }}
    >
      {children}
    </HelpersIndexContext.Provider>
  );
};
