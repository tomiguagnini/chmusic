import { createContext, useContext, useState, ReactNode } from 'react';


interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  login: (newToken: string) => void;
  logout: () => void;
  getToken: () => string | null;
  isLogin: () => boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem('token') || null);

  const login = (newToken: string) => {
    setToken(newToken);
    sessionStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem('token');
  };

  const getToken = () => {
    return token;
  };

  const isLogin = () =>{
    if (token){
      return true
    }
    return false
  }

  const contextValue: AuthContextValue = {
    login,
    logout,
    getToken,
    isLogin
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
