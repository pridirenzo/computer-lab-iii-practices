// Escribir el componente Products.js 
//que reciba por props ese arreglo 
//y devuelva un componente Product por cada uno de los valores del arreglo. 
// A su vez, Product manda por la prop name el valor de la posición del arreglo 
// (El primer producto recibirá “table” en name, el segundo “couch” y así sucesivamente)

import PropTypes from 'prop-types';

const Product = ({name}) =>{
    return(
       <>
       {name}
       </>
    )
}


const Products = ({products}) => {

    return(
        <>
        {products.map((product, index) =>(
            <div key={index}> 
                <h1><Product name={product}/></h1>
            </div>
            ))}
        </>
    )

}

Products.propTypes = {
    products: PropTypes.array
}

Product.propTypes ={
    name: PropTypes.string
}

export default Products; 
