import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  let [flitersValues, setFlitersValues] = useState([]);

  return (
    <FilterContext.Provider value={{ flitersValues, setFlitersValues }}>
      {children}
    </FilterContext.Provider>
  );
};
