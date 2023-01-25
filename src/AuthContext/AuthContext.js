import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  authenticated: false,
  user: {},
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const login = (data, token) => {
    // save token to local storage
    localStorage.setItem("token", token);
    // set authenticated to true
    setAuthenticated(true);
    // set user
    setUser(data);
  };

  const logout = () => {
    // remove token from local storage
    localStorage.removeItem("token");
    // set authenticated to false
    setAuthenticated(false);
    // set user to empty object
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
