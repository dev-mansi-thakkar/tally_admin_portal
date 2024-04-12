'use client';

import React, { createContext, useState } from 'react';

const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <TotalContext.Provider value={{ total, updateTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export { TotalContext, TotalProvider };
