import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const setSearchCache = (key, data) => {
    setCache(prev => ({
      ...prev,
      [key]: data
    }));
  };

  const getSearchCache = (key) => {
    return cache[key];
  };

  return (
    <SearchContext.Provider value={{ cache, setSearchCache, getSearchCache }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);