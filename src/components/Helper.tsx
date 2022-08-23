import { helperType } from "../types/helper.type";

function Helper({ className, handleClick, children }: helperType) {
  return (
    <button className={`${className} helper`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Helper;
