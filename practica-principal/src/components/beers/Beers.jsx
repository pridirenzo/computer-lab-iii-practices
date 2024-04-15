//Crear un componente llamado Beers y dentro de él colocar este arreglo de objetos:
//(simulando una conexión a una api donde obtendremos estos datos)


// componente base.
// mapeo en funcion, y le digo al componente q retorne la funcion mapeadora

import PropTypes from 'prop-types';

const Beers = ({beers}) => {
  // funcion mapeadora
    const mappedBeers = () =>{
        return beers.map((beer) =>(
            <div key={beer.id}>
            <h1>Nombre: {beer.beerName}</h1>
            <h2>Id: {beer.id}</h2>
            <h2>Estilo: {beer.beerStyle}</h2>
            <h3>Precio: {beer.price * (866.73)}</h3>
            <h4>Disponible: {beer.available}</h4>
            </div>
        ))
    }
  return(
    <>
    {mappedBeers()};
    </>
  )

};

Beers.propTypes={
    beers: PropTypes.array
}

export default Beers;
