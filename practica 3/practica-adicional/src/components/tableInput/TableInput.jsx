import { useState } from "react";
import PropTypes from "prop-types";

const TableInput = ({getInputMessage}) => {

    const [inputValue, setInputValue] = useState("");

    const inputHandler = (event) =>{
        setInputValue(event.target.value);
    }
    // envio valor del input al padre ( table form)

    getInputMessage(inputValue);
  return (
    // two way binding linea 19
    <>
      <div className="m-5">
        <input value={inputValue} onChange={inputHandler} className="mt-2" type="text"></input>
        <p>Ingresado: {inputValue}</p> 
      </div> 
    </>
  );
};
export default TableInput;

TableInput.propTypes={
  getInputMessage: PropTypes.func
}