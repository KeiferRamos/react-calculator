type insertType = {
  type: "INSERT_VAL" | "INSERT_ANS";
  payload: string;
};

type helperType = {
  type: "CLEAR_VAL" | "REMOVE_LAST";
};

export type actionType = insertType | helperType;
