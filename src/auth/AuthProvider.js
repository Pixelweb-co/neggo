import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userId")) || null
  );

  useEffect(() => {
    try {
      localStorage.setItem("userId", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("userId");
      console.log(error);
    }
  }, [user]);

  const contextValue = {
    user,
    login() {
     // setUser({ id: 1, username: "jhonf50" });
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
