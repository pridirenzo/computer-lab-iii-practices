import { useState } from "react";
import PropTypes from "prop-types";

const SendingRadio = ({sendRadioDataToForm}) => {

    const [onSiteOption, setOnSiteOption] = useState("");
    const [expressShippingOption, setExpressShippingOption] = useState("");
    const [basicShippingOption, setBasicShippingOption] = useState("");

    const onSiteOptionHandler = (event) =>{
        setOnSiteOption(event.target.value);
        sendRadioDataToForm(event.target.value)
    }

    const expressShippingOptionHandler = (event) =>{
        setExpressShippingOption(event.target.value);
        sendRadioDataToForm(event.target.value)
    }

    const basicShippingOptionHandler = (event) =>{
        setBasicShippingOption(event.target.value);
        sendRadioDataToForm(event.target.value)
    };

    

  return (
    <>
      <div>
        <label>Retiro en el local</label>
        <input value={onSiteOption} onChange={onSiteOptionHandler} type="radio"></input>
        <br></br>
        <label>Envío exprés</label>
        <input value={expressShippingOption} onChange={expressShippingOptionHandler} type="radio"></input>
        <br></br>
        <label>Envío común</label>
        <input value={basicShippingOption} onChange={basicShippingOptionHandler} type="radio"></input>
        <br></br>
      </div>
    </>
  );
};
export default SendingRadio;


SendingRadio.propTypes={
    sendRadioDataToForm: PropTypes.func
}