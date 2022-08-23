import { useContext } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Helper from "./components/Helper";
import { TbEqual } from "react-icons/tb";
import { FiDelete, FiArrowLeft } from "react-icons/fi";
import inputStyle from "./styles/input.styles";
import buttonStyle from "./styles/button.styles";
import "./styles/App.css";
import { GlobalContext } from "./context/AppContext";
import { CLEAR_VAL, REMOVE_LAST } from "./actions/actions";
import HandleInputs from "./functions/handle.inputs";
import Insert from "./helper/Insert";

function App() {
  const {
    state: { inputs, answer },
    dispatch,
  } = useContext(GlobalContext);
  const { handleAnswer, handleInput } = HandleInputs();
  const { operation } = Insert();

  return (
    <div className="App">
      <div className="calculator">
        <Input styles={inputStyle} readOnly={true} value={inputs} />
        <Input styles={inputStyle} readOnly={true} value={answer} />
        <div className="buttons">
          {Array.from(Array(10).keys()).map((num, i) => {
            return (
              <Button
                styles={buttonStyle}
                key={i}
                handleClick={(e) => handleInput(e)}
              >
                {num.toString()}
              </Button>
            );
          })}
          <Button styles={buttonStyle} handleClick={(e) => handleInput(e)}>
            .
          </Button>
          <Button styles={buttonStyle} handleClick={(e) => handleInput(e)}>
            +/-
          </Button>
          {operation.map((symbol, i) => {
            return (
              <Button
                styles={buttonStyle}
                key={i}
                handleClick={(e) => handleInput(e)}
              >
                {symbol}
              </Button>
            );
          })}

          <Helper
            className="remove-last"
            handleClick={() => dispatch({ type: REMOVE_LAST })}
          >
            <FiArrowLeft />
          </Helper>
          <Helper
            className="clear-btn"
            handleClick={() => dispatch({ type: CLEAR_VAL })}
          >
            <FiDelete />
          </Helper>
          <Helper className="equal-btn" handleClick={() => handleAnswer()}>
            <TbEqual />
          </Helper>
        </div>
      </div>
    </div>
  );
}

export default App;
