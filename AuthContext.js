import { createContext } from "react";

const AuthContext = createContext({
  authenticated: false,
  user: {},
  login: () => {},
  logout: () => {},
});

export default AuthContext;
