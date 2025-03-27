import PropTypes from "prop-types";

const PersonForm = ({ handleNameFormChange, handleNumberFormChange, handleSubmit }) => {
    return (
        <form>
            <div>
                name: <input id="nameForm" onChange={handleNameFormChange} />
            </div>
            <div>
                number : <input id="numberForm" onChange={handleNumberFormChange} />
            </div>
            <div>
                <button type="submit" id="addButton" onClick={handleSubmit}>add</button>
            </div>
        </form>
    )
}

PersonForm.propTypes = {
  handleNameFormChange: PropTypes.func.isRequired,
  handleNumberFormChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default PersonForm