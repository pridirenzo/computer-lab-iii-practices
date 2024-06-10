import { Button } from "react-bootstrap";
import PropTypes from "prop-types";


const ChangeDollar = ({currencyRate, setCurrencyRate, setButtonFlag}) =>{
    currencyRate=1000;

    const changeDollarHandler = () =>{
        // conversion a pesos actual: 1000 aprox
        setButtonFlag(true);
        setCurrencyRate(currencyRate);
        
    }



    return(
        <>  
            <Button onClick={changeDollarHandler} className="m-3">Change dollar</Button>
        </>
    )
}
export default ChangeDollar;

ChangeDollar.propTypes={
    setCurrencyRate: PropTypes.func,
    currencyRate: PropTypes.string,
    setButtonFlag: PropTypes.func
}