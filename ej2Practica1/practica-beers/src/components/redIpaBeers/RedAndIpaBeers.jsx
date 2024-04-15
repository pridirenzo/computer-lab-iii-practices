// 3- Crear otro componente donde internamente haga un conteo y 
// nos muestre por pantalla la cantidad de cervezas de estilo Red e IPA que tenemos en la lista. (Prestar atención en la manera de pasar el arreglo por props)
import PropTypes from 'prop-types';

const RedEIpa = ({beers}) =>{
    const filteredBeers = beers.filter((beer) => beer.beerStyle === "Red" || beer.beerStyle === "IPA"); // array q contendra las cervezas con estilo Red e Ipa
    return(
        <>
            <h1>{filteredBeers.length}</h1>
        </>
    )

}

RedEIpa.propTypes = {
    beers: PropTypes.array,
};

export default RedEIpa;