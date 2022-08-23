import React, { useContext } from "react";
import Insert from "../helper/Insert";
import { GlobalContext } from "../context/AppContext";

function HandleInputs() {
  const {
    state: { inputs },
  } = useContext(GlobalContext);
  const { insertAns, insertVal, operation } = Insert();

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    const char = (e.target as HTMLElement).textContent!!;
    const lastCharinString = inputs.charAt(inputs.length - 1);
    const inputsNumArray = inputs.split(/[×÷+−]+/);
    const lastcharInArray = inputsNumArray[inputsNumArray.length - 1];
    const concatInputs = inputs + char;
    if (operation.includes(char)) {
      if (operation.includes(lastCharinString)) {
        const returnVal = inputs.slice(0, -1) + char;
        insertVal(returnVal);
      } else if (lastcharInArray === ".") {
        return;
      } else {
        insertVal(concatInputs);
      }
    } else if (char === ".") {
      if (lastcharInArray.includes(".")) {
        return;
      } else {
        insertVal(concatInputs);
      }
    } else if (char === "+/-") {
      if (operation.includes(lastCharinString) || lastCharinString == ".") {
        return;
      }
      if (lastcharInArray.includes("-")) {
        const removedNegative = lastcharInArray.slice(1);
        const returnVal =
          inputs.slice(0, (removedNegative.length + 1) * -1) + removedNegative;

        insertVal(returnVal);
      } else {
        const addedNegative = `-${lastcharInArray}`;
        const returnVal =
          inputs.slice(0, (addedNegative.length - 1) * -1) + addedNegative;
        insertVal(returnVal);
      }
    } else {
      insertVal(concatInputs);
    }
  };

  const handleAnswer = () => {
    let splitInputs = Array.from(inputs)
      .map((input) => {
        if (operation.includes(input)) {
          return ` ${input} `;
        } else {
          return input;
        }
      })
      .join("")
      .split(" ")
      .filter((el) => el);

    const lastInput = splitInputs[splitInputs.length - 1];

    if (lastInput == ".") {
      return;
    }
    if (operation.includes(lastInput)) {
      splitInputs.pop();
    }

    while (true) {
      const hasOperator = splitInputs.some((el) => operation.includes(el));
      if (hasOperator) {
        let operator = "";
        let num1 = "";
        let num2 = "";
        let newval = "";

        const hasHighPrio = splitInputs.some((el: string) =>
          ["×", "÷"].includes(el)
        );

        if (hasHighPrio) {
          for (var i = 0; i < splitInputs.length - 1; i++) {
            if (splitInputs[i] == "÷" || splitInputs[i] == "×") {
              operator = splitInputs[i];
              num1 = splitInputs[i - 1];
              num2 = splitInputs[i + 1];
              if (operator == "÷") {
                newval = (+num1 / +num2).toString();
              } else {
                newval = (+num1 * +num2).toString();
              }
              splitInputs.splice(i - 1, 3);
              splitInputs.splice(i - 1, 0, newval);
              break;
            }
          }
        } else {
          for (var i = 0; i < splitInputs.length - 1; i++) {
            if (splitInputs[i] == "+" || splitInputs[i] == "−") {
              operator = splitInputs[i];
              num1 = splitInputs[i - 1];
              num2 = splitInputs[i + 1];
              if (operator == "+") {
                newval = (+num1 + +num2).toString();
              } else {
                newval = (+num1 - +num2).toString();
              }
              splitInputs.splice(i - 1, 3);
              splitInputs.splice(i - 1, 0, newval);
              break;
            }
          }
        }
      } else {
        insertAns(splitInputs.join(""));
        break;
      }
    }
  };

  return { handleInput, handleAnswer };
}

export default HandleInputs;
