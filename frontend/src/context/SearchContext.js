import { createContext, useCallback, useContext, useMemo, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const setSearchCache = useCallback((key, data) => {
    setCache(prev => ({
      ...prev,
      [key]: data
    }));
  }, []);

  const getSearchCache = useCallback((key) => {
    return cache[key];
  }, [cache]);

  const value = useMemo(
    () => ({ cache, setSearchCache, getSearchCache }),
    [cache, setSearchCache, getSearchCache]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
