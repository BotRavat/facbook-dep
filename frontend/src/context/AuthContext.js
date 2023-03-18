import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  user:null
//  user: {
// _id:"63e7d854da07552d92dc3122",
//     username: "jane",
//     email: "jane@email.com",
//     password: "$2b$10$USZ9iDDBlQAm2pxSnLM7o.e8VXwR3Ct8iFm7MRxwZuW2df0vVcYjW",
//     profilePicture: "",
//     coverPicture: "",
//     isAdmin:false,
//     followers: [],
//     followings: [],
//   }
,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
