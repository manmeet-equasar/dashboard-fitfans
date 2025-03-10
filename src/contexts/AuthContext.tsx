import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  setLogedIn: (logedIn: boolean) => void;
  logedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
  setLogedIn: () => {},
  logedIn: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [logedIn, setLogedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        setLogedIn,
        logedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
