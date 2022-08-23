import React, { createContext, useReducer } from "react";
import { stateType } from "../types/state.type";
import { actionType } from "../types/action.type";
import { reducer } from "../reducer/reducer";

export const GlobalContext = createContext({} as contextType);

type containerType = {
  children: React.ReactNode;
};

type contextType = {
  state: stateType;
  dispatch: React.Dispatch<actionType>;
};

const initialState = {
  inputs: "",
  answer: "",
};

function AppContext({ children }: containerType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
