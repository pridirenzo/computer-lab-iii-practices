import Beers from "./components/beers/Beers"
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeDollar from "./components/changeDollar/ChangeDollar";
import { useState } from "react";


function App() {

  const [buttonFlag, setButtonFlag] = useState(false);
  const [currencyRate, setCurrencyRate] = useState("");
  


  return (
    <>
    <Beers buttonFlag={buttonFlag} currencyRate={currencyRate}></Beers>
    <ChangeDollar buttonFlag={buttonFlag} setButtonFlag={setButtonFlag} setCurrencyRate={setCurrencyRate}/>
    
    </>
  )
}

export default App
