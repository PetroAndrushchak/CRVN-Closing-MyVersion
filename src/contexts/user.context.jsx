import { createContext, useEffect, useReducer } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  console.log("userReducer");
  const { type, payload } = action;

  console.log("type", type);
  console.log("payload", payload);
  console.log("action", action);

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log('currentUser', currentUser);

  const setCurrentUser = (user) => {
    console.log("setCurrentUser");
    console.log("CURRENT_USER", user);
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });

  }

  useEffect(() => {
    console.log("UserProvider useEffect");
    const unsubscribeFromAuth = onAuthStateChangedListener((user) => {
      console.log("onAuthStateChangedListener");
      console.log("user", user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    console.log("unsubscribeFromAuth");
    return unsubscribeFromAuth;
  }, []);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
