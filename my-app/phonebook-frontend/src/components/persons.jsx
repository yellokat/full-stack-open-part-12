import DeleteButton from './deleteButton'
import PropTypes from "prop-types";

const Persons = ({ persons, searchKey, handleDelete }) => {
    return (
        <>
            {
                persons
                    .filter(
                        person => person.name.toLowerCase().includes(searchKey.toLowerCase())
                    )
                    .map(
                        person => (<div key={person.name}>{person.name} {person.number} <DeleteButton onClick={()=>handleDelete(person.id)}/></div>)
                    )
            }
        </>
    )
}

Persons.propTypes = {
    persons: PropTypes.array.isRequired,
    searchKey: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default Persons