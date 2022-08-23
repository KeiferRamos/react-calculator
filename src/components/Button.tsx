import { buttonType } from "../types/button.type";

function Button({ styles, handleClick, children }: buttonType) {
  return (
    <button style={styles} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
