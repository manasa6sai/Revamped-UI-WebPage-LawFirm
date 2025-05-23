"use client";  // Important for client-side rendering

import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider({ children }) {
  const [message, setMessage] = useState("Welcome to Coye Law Firm!");

  return (
    <MyContext.Provider value={{ message, setMessage }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
