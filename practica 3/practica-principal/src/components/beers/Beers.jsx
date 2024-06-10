
import PropTypes from "prop-types";
import NewBeer from "../newBeer/NewBeer";
import { useState } from "react";
const Beers = ({ currencyRate, buttonFlag}) => {

    const [beers, setBeers] = useState([
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    { id: 3, beerName: "Irish", beerStyle: "Red", price: 4, available: true },

    { id: 4, beerName: "Scotish", beerStyle: "Red", price: 3, available: true },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ]);

  // () retornan JSX
  return (
    <ul>
      {beers.map((beer) => (
        <div key={beer.id}>
          <li>Name: {beer.beerName}</li>
          <li>Style: {beer.beerStyle}</li>
          <li>Price:{buttonFlag == false ? "$"+beer.price : "$"+beer.price * currencyRate}</li>
          <li>Available: {beer.available ? " Yes" : " No "}</li>
          <br></br>
        </div>
      ))}
      <NewBeer beers={beers} setBeers={setBeers}/> 
    </ul>
  );
};
export default Beers;

Beers.propTypes = {
  currencyRate: PropTypes.string,
  setCurrencyRate: PropTypes.func,
  buttonFlag: PropTypes.bool,
  beers: PropTypes.array,
  setBeers: PropTypes.func,
  setButtonFlag: PropTypes.func
};
