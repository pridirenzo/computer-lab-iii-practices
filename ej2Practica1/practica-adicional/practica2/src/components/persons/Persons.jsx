// Escribir el componente Persons.js que reciba por props ese arreglo, 
//filtre aquellos nombres que comiencen con la letra P y 
//devuelva un componente Person por cada una de las personas que cumplen esa 
//condición. A su vez, Person recibirá por props el valor del nombre.

import PropTypes from 'prop-types';

const Person = ({name}) =>{
    return(
        <>
        {name}
        </>
    )
}

const Persons = ({names}) =>{

    const filteredNames = names.filter((name) => name[0] === "P");
    return (
        <>
        {filteredNames.map((name, index) =>(
            <div key={index}>
                <h1><Person name={name}/></h1>
            </div>
        ))}
        </>
    )
}

Persons.propTypes = {
    names: PropTypes.array
}

Person.propTypes = {
    name: PropTypes.string
}

export default Persons;