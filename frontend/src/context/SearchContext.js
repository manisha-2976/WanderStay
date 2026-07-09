import { createContext, useCallback, useContext, useMemo, useState } from "react";

const SearchContext = createContext();
const SEARCH_CACHE_TTL = 60 * 1000;

export const SearchProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const setSearchCache = useCallback((key, data) => {
    setCache(prev => ({
      ...prev,
      [key]: {
        data,
        expiresAt: Date.now() + SEARCH_CACHE_TTL
      }
    }));
  }, []);

  const getSearchCache = useCallback((key) => {
    const cached = cache[key];

    if (!cached || cached.expiresAt < Date.now()) {
      return null;
    }

    return cached.data;
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
