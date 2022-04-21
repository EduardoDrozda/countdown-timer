import React, { createContext, useContext, useState } from "react";

interface CountdownContextProps {
  countdownDate: string;
  saveCountdownDate: (value: string) => void;
}

const CountdownContext = createContext<CountdownContextProps>(
  {} as CountdownContextProps
);

interface CountdownProviderProps {
  children: React.ReactNode;
}

const CountdownProvider: React.FC<CountdownProviderProps> = ({ children }) => {
  const [countdownDate, setCountdownDate] = useState<string>("");

  function saveCountdownDate(value: string) {
    setCountdownDate(value);
  }

  return (
    <CountdownContext.Provider
      value={{
        countdownDate,
        saveCountdownDate,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

function useCountdown() {
  const context = useContext(CountdownContext);

  return context;
}

export { CountdownProvider, CountdownContext, useCountdown };
