//2- Crear un componente donde se muestren en pantalla solo las cervezas disponibles. (Mirando la propiedad available)
import PropTypes from 'prop-types';

const AvailableBeer = ({beers}) =>{
   const availableBeersArray = beers.filter((beer) => beer.available); 
   return(
   <>
    {availableBeersArray.map((beer)=>(
              <div key={beer.id}>
              <h1>Nombre: {beer.beerName}</h1>
              <h2>Id: {beer.id}</h2>
              <h2>Estilo: {beer.beerStyle}</h2>
              <h3>Precio: {beer.price * (866.73)}</h3>
              <h4>Disponible: {beer.available}</h4>
              </div>
    ))}
   </>
   );
};



AvailableBeer.propTypes = {
    beers: PropTypes.array,
    beerName: PropTypes.string

}

export default AvailableBeer; 