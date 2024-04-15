// 4- Crear un componente que muestre por pantalla solamente los estilos de cerveza que hay en esta lista de cervezas.

import PropTypes from 'prop-types';

const BeerStyles = ({beers}) => {
    const filteredBeers= beers.filter((beer) => beer.beerStyle === "Red" || beer.beerStyle === "IPA");
    return(
        <>
        {filteredBeers.map((beer) =>(
            <div key={beer.id}>
                <h1>Estilos: {beer.beerStyle}</h1>
            </div>
        ))}
        </>
    )
}


BeerStyles.propTypes ={
    beers: PropTypes.array,
    filteredBeers: PropTypes.array
}

export default BeerStyles;