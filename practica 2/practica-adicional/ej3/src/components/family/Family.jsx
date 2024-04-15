import PropTypes from 'prop-types';


// mapeo dentro de componente auxiliar FamilyMember
const FamilyMember = ({persons}) =>{

    const personsAge = persons.map((person) => person.age);
    personsAge.sort((a,b) => b-a); // mayor a menor

    return(
        <>
        {persons.map((person, index) =>(
            <div key={index}>
                <h3>Nombre: {person.name}</h3>
                <p>Edad:{personsAge[index]}</p>
            </div>
        ))};
        </>
    );
};

// componente Family retorna un componente FamilyMember
const Family = ({persons}) =>{

    return(
        <>
            <FamilyMember persons={persons}/>
        </>
    )
}


Family.propTypes = {
    persons: PropTypes.array
};

FamilyMember.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    persons: PropTypes.array
};

export default Family;