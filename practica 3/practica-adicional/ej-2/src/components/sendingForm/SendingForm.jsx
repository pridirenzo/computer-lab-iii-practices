import { useState } from "react";
import SendingRadio from "../sendingRadio/SendingRadio";

const SendingForm = () => {
  const [message, setMessage] = useState("");

  // Función que va a recibir del hijo
  const sendRadioDataToForm = (radioData) => {
    if (radioData === "Retiro en el local") {
      setMessage("No hay recargo");
    } else if (radioData === "Envío exprés" || radioData === "Envío común") {
      setMessage("Hay recargo");
    }
  };

  return (
    <>
      <h2>Seleccione el tipo de envío: </h2>
      <SendingRadio sendRadioDataToForm={sendRadioDataToForm}></SendingRadio>
      <p>{message}</p>
    </>
  );
};

export default SendingForm;
