import PropTypes from "prop-types";

const DeleteButton = ({onClick}) => {
    return (
        <>
            <button type="button" onClick={onClick}>delete</button>
        </>
    )
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteButton