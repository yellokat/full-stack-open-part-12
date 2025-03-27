import PropTypes from "prop-types";

const Filter = ({ onChange }) => {
    return (
        <>
            <>filter shown with </>
            <input onChange={onChange} />
        </>
    )
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Filter