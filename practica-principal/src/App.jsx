import AvailableBeer from "./components/availableBeers/AvailableBeers";
import BeerStyles from "./components/beerStyles/BeerStyles";
import Beers from "./components/beers/Beers";
import RedEIpa from "./components/redIpaBeers/RedAndIpaBeers";

const beers = [
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
  { id: 3, 
    beerName: "Irish", 
    beerStyle: "Red", 
    price: 4, 
    available: true 
  },
  { id: 4, 
    beerName: "Scotish", 
    beerStyle: "Red", 
    price: 3, 
    available: true 
  },
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
  }
];

const App = () => {

  return (
    <>
    <h1>Total de stock de cervezas:</h1>
    <Beers beers={beers}/>
    <h1>Cervezas disponibles: </h1>
    <AvailableBeer beers={beers}/>
    <h1>Cantidad de cervezas estilo IPA y Red:</h1>
    <RedEIpa beers={beers}/>
    <h1>Estilos disponibles:</h1>
    <BeerStyles beers={beers}/>
    </>
  );
};

export default App;
