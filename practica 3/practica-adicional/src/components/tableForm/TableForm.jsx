import { useState } from 'react';
import TableInput from '../tableInput/TableInput';

const TableForm = () => {
  const [message, setMessage] = useState('');

  // funcion q recibira hijo
  const inputMessage = (inputValue) => {
    if(inputValue === "4") {
      setMessage('Mesa correcta');
      console.log(message)
    } else {
      setMessage('Mesa inestable');
      console.log(message)
    }
  };

  return (
    <div>
      <h2 className="m-5">Ingrese la cantidad de patas: </h2>
      {/* Pasar la función como prop al componente hijo */}
      <TableInput getInputMessage={inputMessage} />
      <br />
      {/* Mostrar el mensaje recibido del componente hijo */}
      <p>{message}</p>
    </div>
  );
};

export default TableForm;
