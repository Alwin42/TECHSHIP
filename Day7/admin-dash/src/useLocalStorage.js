import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
}