import { InputType } from "../types/Input.type";

function Input({ readOnly, value, styles }: InputType) {
  return <input style={styles} readOnly={readOnly} type="text" value={value} />;
}

export default Input;
