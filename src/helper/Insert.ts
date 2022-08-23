import React, { useContext } from "react";
import { GlobalContext } from "../context/AppContext";
import { INSERT_VAL, INSERT_ANS } from "../actions/actions";

function Insert() {
  const { dispatch } = useContext(GlobalContext);
  const operation: string[] = ["×", "÷", "+", "−"];

  const insertVal = (item: string) => {
    dispatch({ type: INSERT_VAL, payload: item });
  };

  const insertAns = (item: string) => {
    dispatch({ type: INSERT_ANS, payload: item });
  };
  return { insertAns, insertVal, operation };
}

export default Insert;
