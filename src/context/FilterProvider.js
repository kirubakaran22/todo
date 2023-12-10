import React, { useState } from "react";

export const FilterContext = React.createContext({
  filterBy: "",
  setAllActive: () => {},
  setActive: () => {},
  setCompletedActive: () => {},
});

const FilterProvider = (props) => {
  const [filterState, setFilterState] = useState("ALL");
  const setAllActive = (event) => {
    setFilterState("ALL");
  };
  const setActive = (event) => {
    setFilterState("ACTIVE");
  };
  const setCompleteActive = (event) => {
    setFilterState("COMPLETED");
  };
  const fliterContextValue = {
    filterBy: filterState,
    setAllActive: setAllActive,
    setActive: setActive,
    setCompletedActive: setCompleteActive,
  };
  return (
    <FilterContext.Provider value={fliterContextValue}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
