import React, {Children, createContext, useContext} from 'react';
import type {FC} from 'react';

// 타입 정의 함수의 형식 정의한거
export type ToggleThemeContextType = {
  toggleTheme: () => void;
};

const defaultToggleThemeContext = {
  toggleTheme: () => {},
};

const ToggleThemeContext = createContext<ToggleThemeContextType>(
  defaultToggleThemeContext,
);

type ToggleThemeContextProps = {
  toggleTheme: () => void;
};

export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({
  children,
  toggleTheme,
}) => {
  const value = {
    toggleTheme,
  };
  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export const useToggleTheme = () => {
  const {toggleTheme} = useContext(ToggleThemeContext);
  return toggleTheme;
};
