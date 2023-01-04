import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    console.log("UserProvider useEffect");
    const unsubscribeFromAuth = onAuthStateChangedListener((user) => {
      console.log("onAuthStateChangedListener");
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    console.log("unsubscribeFromAuth");
    return unsubscribeFromAuth;
  }, []);


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
