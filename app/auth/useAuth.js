import { useContext } from "react";

import authStorage from "./storage";
import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logOut };
};

export default useAuth;
