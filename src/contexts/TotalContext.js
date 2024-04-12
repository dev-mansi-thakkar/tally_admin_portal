'use client';

import React, { createContext, useState } from 'react';

const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(0);

  return (
    <TotalContext.Provider value={{ total }}>
      {children}
    </TotalContext.Provider>
  );
};

export { TotalContext, TotalProvider };
